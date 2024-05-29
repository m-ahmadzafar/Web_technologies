const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const User = require('../models/user');


router.get('/', async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
      }
    try {
        const events = await Event.find().populate('users.user');
        res.render('eventList', { 
            title: 'Events',
            events,
            css: '/css/eventList.css',
            script: '', 
            layout: 'layouts/mainLayout' 
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


router.get('/create', async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
      }
    try {
        const users = await User.find(); // Fetch all users
        res.render('eventCreate', {
            title: 'Create Event',
            css: '/css/eventCreate.css',
            script: '',
            users, // Pass users to the template since i want em in the select dropdown
            layout: 'layouts/mainLayout' 
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


//FOR TEMPORARY USE WITHOUT USER
// router.post('/create', async (req, res) => {
//     const { name, type, details, location, date } = req.body; // Remove users from here
    
//     try {
//         const event = new Event({ name, type, details, location, date });
//         await event.save();
//         res.redirect('/events');
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// });

router.post('/create', async (req, res) => {
    const { name, type, details, location, date, users } = req.body;

    try {
        // Ensure users is an array and transform to the correct format
        const formattedUsers = Array.isArray(users) ? users.map(userId => ({ user: userId })) : [{ user: users }];

        const event = new Event({ name, type, details, location, date, users: formattedUsers });
        await event.save();
        res.redirect('/events');
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});




// Render event edit form
router.get('/edit/:id', async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
      }
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        const users = await User.find(); // Fetch all users
        res.render('eventEdit', {
            title: 'Edit Event',
            css: '/css/eventEdit.css',
            script: '',
            event,
            users, // Pass users to the template
            layout: 'layouts/mainLayout' 
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

router.post('/edit/:id', async (req, res) => {
    const { name, type, details, location, date, users } = req.body;

    try {
        // Ensure users is an array and transform to the correct format
        const formattedUsers = Array.isArray(users) ? users.map(userId => ({ user: userId })) : [{ user: users }];

        const event = await Event.findByIdAndUpdate(req.params.id, { name, type, details, location, date, users: formattedUsers }, { new: true });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.redirect('/events');
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});



// Delete an event by ID
router.post('/delete/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.redirect('/events');
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Render single event with populated users
router.get('/:id', async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
      }
    try {
        const event = await Event.findById(req.params.id).populate('users.user');
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        
        const users = await User.find(); // Get all users for the dropdown
        res.render('eventDetails', {
            title: 'Single Event',
            css: '/css/eventDetails.css',
            script: '',
            event,
            users,
            layout: 'layouts/mainLayout' 
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Add a user to an event
router.post('/:id/add-user', async (req, res) => {
    try {
        const { userId, status } = req.body;
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        event.users.push({ user: userId, status });
        await event.save();
        res.redirect(`/events/${req.params.id}`);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Remove a user from an event
router.post('/:id/remove-user/:userId', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        event.users = event.users.filter(u => u.user.toString() !== req.params.userId);
        await event.save();
        res.redirect(`/events/${req.params.id}`);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;



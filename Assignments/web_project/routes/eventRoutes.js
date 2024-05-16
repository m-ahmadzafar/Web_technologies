const express = require('express');
const router = express.Router();

router.get('/create', (req,res)=>{
    res.render('eventCreate', {title: 'Create Event',  layout: 'layouts/mainLayout'});
})

router.post('/create', (req,res)=>{
    // Placeholder for event creation logic
  res.send('Event creation functionality will be implemented here');
})

router.get('/edit', (req,res)=>{
    res.render('eventEdit', {title: 'Edit Event',  layout: 'layouts/mainLayout'});
})

router.post('/edit', (req,res)=>{
    // Placeholder for event creation logic
  res.send('Event editing functionality will be implemented here');
})

router.get('/details', (req,res)=>{
    res.render('eventDetails', {title: 'Event Details',  layout: 'layouts/mainLayout'});
})

module.exports = router;

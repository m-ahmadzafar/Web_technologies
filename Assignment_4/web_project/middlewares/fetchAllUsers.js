module.exports= async (req, res, next) => {
    try {
        // Fetch all users from the database
        const users = await User.find();
        // Store users in res.locals to make it available in templates
        res.locals.users = users;
        next();
    } catch (error) {
        // Handle error if unable to fetch users
        console.error('Error fetching users:', error);
        res.locals.users = []; // Set users to empty array 
        next(); 
    }


};
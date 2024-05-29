// middleware/authMiddleware.js

// for the login, register and logout button visibility functionality. 
module.exports = function(req, res, next) {
    res.locals.isAuthenticated = req.session && req.session.userId ? true : false;
    next();
};

//we are using this middleware to prevent the unauthorized access of some pages by simply entering the routes manually.
//we are importing this middlewares in required routes
module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}
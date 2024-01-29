const checkUserRole = (allowedRoles) => {
    return (req, res, next) => {
        if (req.session && req.session.userRole) {
            if (allowedRoles.includes(req.session.userRole)) {
                next();
            } else {
                res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
            }
        } else {
            res.status(401).json({ error: 'Unauthorized: User not logged in' });
        }
    };
};

module.exports = { checkUserRole };

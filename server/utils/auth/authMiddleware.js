const jwt = require('jsonwebtoken');
const { errorHandler } = require('../error');

const checkUserRole = (allowedRoles) => {
    return async (req, res, next) => {
        try {
            if (req.session && req.session.userRole) {
                if (allowedRoles.includes(req.session.userRole)) {
                    next();
                } else {
                    res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
                }
            } else {
                const token = req.cookies.token;

                if (!token) {
                    const unauthorizedError = errorHandler(401, 'Unauthorized: User not logged in');
                    return next(unauthorizedError);
                }

                jwt.verify(token, "7B&6$QyMv48gZ*aR@n!PbUt2Lj%zWsHs", (err, user) => {
                    if (err) {
                        const forbiddenError = errorHandler(403, 'Forbidden: Invalid token');
                        return next(forbiddenError);
                    }

                    req.session.userRole = user.roleId;
                    req.session.save();

                    if (allowedRoles.includes(req.session.userRole)) {                    
                        next();
                    } else {
                        res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
                    }
                });
            }
        } catch (error) {
            console.error('Error in checkUserRole middleware:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
};

module.exports = { checkUserRole };

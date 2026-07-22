const mongoose = require('mongoose');

const validateID = (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Please enter a valid ID' });
    }
    next();
}

module.exports = validateID;
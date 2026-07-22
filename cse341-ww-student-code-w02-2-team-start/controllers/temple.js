const db = require('../models');
const Temple = db.temples;

// Create and Save a new Temple
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  const temple = new Temple({
    temple_id: req.body.temple_id,
    additionalInfo: req.body.additionalInfo,
    name: req.body.name,
    location: req.body.location,
    dedicated: req.body.dedicated,
  });

  temple
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Temple.',
      });
    });
};

// Retrieve all Temples
exports.findAll = (req, res) => {
  /*
  #swagger.documentation = API KEY: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N
  */
  Temple.find(
    {},
    {
      temple_id: 1,
      name: 1,
      location: 1,
      dedicated: 1,
      additionalInfo: 1,
      _id: 0,
    }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving temples.',
      });
    });
};

// Find a single Temple by temple_id
exports.findOne = (req, res) => {
  const temple_id = parseInt(req.params.temple_id);

  Temple.findOne({ temple_id: temple_id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Temple with temple_id=${temple_id} was not found.`,
        });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Temple with temple_id=${temple_id}`,
      });
    });
};

// Update a Temple by temple_id
exports.update = (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send({
      message: 'Data to update cannot be empty!',
    });
  }

  const temple_id = parseInt(req.params.temple_id);

  Temple.findOneAndUpdate(
    { temple_id: temple_id },
    req.body,
    {
      returnDocument: 'after',
      runValidators: true,
    }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Temple with temple_id=${temple_id} was not found.`,
        });
      }

      res.send({
        message: 'Temple was updated successfully.',
        temple: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Temple with temple_id=${temple_id}`,
      });
    });
};

// Delete a Temple by temple_id
exports.delete = (req, res) => {
  const temple_id = parseInt(req.params.temple_id);

  Temple.findOneAndDelete({ temple_id: temple_id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Temple with temple_id=${temple_id} was not found.`,
        });
      }

      res.send({
        message: 'Temple was deleted successfully!',
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete Temple with temple_id=${temple_id}`,
      });
    });
};

// Delete all Temples
exports.deleteAll = (req, res) => {
  Temple.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Temples were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all temples.',
      });
    });
};
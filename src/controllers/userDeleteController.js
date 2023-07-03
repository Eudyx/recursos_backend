const userDeleteModel = require('../models/userDeleteModel');

// creates a reacord of a user tha is being delete
const createUserDelete = async (req, res) => {
    const { user, deleteDescription } = req.body;

    if(!user || !deleteDescription) return res.status(400).json({ 'message': 'All the fields are required' });

    try {
      const result = await userDeleteModel.create({
            user,
          deleteDescription
      });

      const response = { 
          message: 'sourceDelete created',
          result
      }

      console.log(response);
      res.json(response);
  } catch (err) {
      console.error(err);
  }
}

module.exports = {
    createUserDelete
}
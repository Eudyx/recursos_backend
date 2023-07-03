const sourceDelteModel = require('../models/sourceDeleteModel');

// creates a reacord of a item tha is being delete
const createSourceDelete = async (req, res) => {
    const { title, file, description, owner, deleteDescription } = req.body;

    if(!title || !file || !description || !owner || !deleteDescription) return res.status(400).json({ 'message': 'All the fields are required' });

    try {
      const result = await sourceDelteModel.create({
          title,
          file,
          description,
          owner,
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
    createSourceDelete
}
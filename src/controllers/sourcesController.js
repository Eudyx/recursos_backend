const Source = require('../models/sourceModel');
const helpers = require('../helpers/functions');
const path = require('path');
const fs = require('fs');

const getSources = async (req, res) => {
  try {
    const allSources = await Source.find();
    if(!allSources) return res.status(204).json({ 'message': 'No content' });

    console.log(allSources);

    res.json(allSources);
  } catch (err) {
    console.error(err);
  }
}

// creates the file name and concat the extension of the file
const saveSource = (req, res) => {
  
    const file = req.files.file;

    if(!fs.existsSync(path.join('uploads'))) {
      try {
        fs.mkdirSync('uploads');
      } catch (err) {
        console.error(err);
      }
    }

    const extension = file.name.split('.').pop();
    const fileName = `${Date.now()}.${extension}`;
  
    file.mv(`uploads/${fileName}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al guardar el archivo.');
      }
      res.json({file, filen: fileName});
    });
}

const createSource = async (req, res) => {
    const { title, file, description, owner } = req.body;

    if(!title || !file || !description || !owner) return res.status(400).json({ 'message': 'All the fields are required' });

    try {
      const result = await Source.create({
          title,
          file,
          description,
          owner
      });

      const response = { 
          message: 'Source created',
          result
      }

      console.log(response);
      res.json(response);
  } catch (err) {
      console.error(err);
  }
}

const deleteSorce = async (req, res) => {
  const { id } = req.params;
  if(!id) return res.status(400).json({ "message": "The id is required" });

  try {

    const foundSource = await Source.findById(id);
    if(!foundSource) return res.sendStatus(204);

    const result = await Source.deleteOne({ _id: foundSource._id });

    // Deletes the file in the server
    helpers.fileDelete(path.join('uploads', foundSource.file));
    
    res.json(result);

  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getSources,
  saveSource,
  createSource,
  deleteSorce
}
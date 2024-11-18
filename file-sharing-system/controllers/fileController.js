const File = require('../models/File');
const crypto = require('crypto');

exports.uploadFile = async (req, res) => {
  try {
    const file = req.file;
    const encryptedUrl = crypto.createHash('sha256').update(file.path).digest('hex');

    const newFile = new File({
      file_name: file.originalname,
      file_type: file.mimetype,
      uploaded_by: req.user.id,
      encrypted_url: encryptedUrl,
    });

    await newFile.save();
    res.status(201).send('File uploaded successfully');
  } catch (err) {
    res.status(500).send('Error uploading file: ' + err.message);
  }
};

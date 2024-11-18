const express = require('express');
const { uploadFile } = require('../controllers/fileController');
const multer = require('multer');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', authMiddleware, upload.single('file'), uploadFile);

module.exports = router;


const multer = require('multer');
const { resolve } = require('node:path');
const { v4 } = require('uuid');

module.exports = {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (_req, file, cb) => {
      const sanitizedName = file.originalname.replace(/\s+/g, '-');
      const uniqueName = v4().concat(`-${sanitizedName}`);
      return cb(null, uniqueName);
    },
  }),
};

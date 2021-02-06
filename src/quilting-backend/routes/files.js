const express = require('express');
const router = express.Router();
const fs = require('fs');

const imageFolder = '../../assets/quiltDesigns';

router.get('/', function(req, res, next) {
  res.send(fs.readdir(imageFolder, (err, files) => {
    if (err){
        return console.log(err);
    }
    files.forEach(file => {
      console.log(file);
    });
  }));
});

module.exports = router;
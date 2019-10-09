const fs = require('fs').promises;

const readFile = (path) => {
  return fs.readFile(path, 'utf8')
    .then(result => result);
};

module.exports = readFile;
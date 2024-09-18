const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, rejecte) => {
    try {
      let data = readFileSync(path, 'utf-8');
      data = data.split('\n').filter((line) => line.trim() !== '');
      data.shift();
      const fields = {};

      for (const i in data) {
        const line = data[i].split(',');
        if (!fields[line[3]]) {
          fields[line[3]] = [];
        }
        fields[line[3]].push(line[0]);
      }
      resolve(fields);
    } catch (error) {
        rejecte(error.massage);
    }
  });
}

module.exports = readDatabase;

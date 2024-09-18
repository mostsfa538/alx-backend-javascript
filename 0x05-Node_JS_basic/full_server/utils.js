const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    try {
      let data = fs.readFileSync(path, 'utf-8');
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
    } catch (err) {
      reject(err.message);
    }
  });
}

module.exports = readDatabase;

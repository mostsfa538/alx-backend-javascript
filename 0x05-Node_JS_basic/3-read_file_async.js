const fs = require('fs');

let data = null;
function countStudents(path) {
  return new Promise((resolve, reject) => {
    try {
      data = fs.readFileSync(path, 'utf-8');

      data = data.split('\n').filter((line) => line.trim() !== '');
      data.shift();
      const numberOfStd = data.length;
      const fields = {};

      for (const i in data) {
        const line = data[i].split(',');
        if (!fields[line[3]]) {
          fields[line[3]] = [];
        }
        fields[line[3]].push(line[0]);
      }
      console.log(`Number of students: ${numberOfStd}`);
      Object.keys(fields).forEach((field) => {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });
      resolve();
    } catch (err) {
      reject(new Error('Cannot load the database'));
    }
  });
}

module.exports = countStudents;

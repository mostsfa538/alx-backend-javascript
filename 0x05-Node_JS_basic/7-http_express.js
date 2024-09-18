const express = require('express');
const fs = require('fs');

let data = null;
function countStudents(path) {
  return new Promise((resolve, reject) => {
    try {
      data = fs.readFileSync(path, 'utf-8');
      data = data.split('\n').filter((line) => line.trim() !== '');
      data.shift();
      const numberOfStd = data.length;
      let output = '';
      const fields = {};

      for (const i in data) {
        const line = data[i].split(',');
        if (!fields[line[3]]) {
          fields[line[3]] = [];
        }
        fields[line[3]].push(line[0]);
      }
      output += `Number of students: ${numberOfStd}\n`;
      Object.keys(fields).forEach((field) => {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      });
      resolve(output.trim());
    } catch (err) {
      reject('Cannot load the database');
    }
  });
}

module.exports = countStudents;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
  .then((data) => res.send(`This is the list of our students\n${data}`))
  .catch(() => {
    res.statusCode = 200;
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(1245);
module.exports = app;

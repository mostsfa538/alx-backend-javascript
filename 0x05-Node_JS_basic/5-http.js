const http = require('http');
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

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((data) => {
        res.end(data);
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245, 'localhost', () => {
});

module.exports = app;

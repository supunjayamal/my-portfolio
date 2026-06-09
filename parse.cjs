const fs = require('fs');
const content = fs.readFileSync('efdev.js', 'utf8');

const startIndex = content.indexOf('Student Performance Prediction');
if (startIndex !== -1) {
  const snippet = content.substring(Math.max(0, startIndex - 50), startIndex + 500);
  console.log(snippet);
} else {
  console.log('Not found');
}

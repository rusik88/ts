var fs = require('fs');
var matches = fs.readFileSync('../../football.csv', {
    encoding: 'utf-8'
});
console.log(matches);

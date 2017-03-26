function readFile(filename) {
    let rf = require('fs');
    let words = rf.readFileSync(filename, "utf-8");  
    return words;
}

module.exports = readFile;
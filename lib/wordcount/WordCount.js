function readFile(filename) {
    let rf = require('fs');
    let words = rf.readFileSync(filename, "utf-8");  
    return words;
}

function countWords(words) {
    return [{word: words.toLowerCase(), count: 1}];
}

module.exports = {readFile, countWords};
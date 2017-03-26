function readFile(filename) {
    let rf = require('fs');
    let words = rf.readFileSync(filename, "utf-8");  
    return words;
}

function countWords(words) {
    let wordsCount = [];
    const allWords = words.split(' ');
    for(const word of allWords) {
        wordsCount.push({word: word.toLowerCase(), count: 1});
    }
    return wordsCount;
}

module.exports = {readFile, countWords};
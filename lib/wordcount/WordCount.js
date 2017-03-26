function readFile(filename) {
    let rf = require('fs');
    let words = rf.readFileSync(filename, "utf-8");  
    return words;
}

function countWords(words) {
    let wordsCount = [];
    const allWords = words.split(' ');
    for(let word of allWords) {
        word = word.toLowerCase();
        const exitWord = findWord(word, wordsCount);
        if(exitWord !== null) {
            exitWord.count++;
        } else {
            wordsCount.push({word: word, count: 1});
        }
    }
    return wordsCount;
}

function findWord(word, wordsCount) {
    for(const item of wordsCount) {
        if(item.word === word)return item;
    }
    return null;
}

function sortByCount(wordCount) {
    return wordCount;
}
module.exports = {readFile, countWords, sortByCount};
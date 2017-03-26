describe('WordCount', function() {
    const WordCount = require('../../lib/wordcount/WordCount');

    // 读取文件
    it('should return String when read a text file', function() {
        let words = WordCount.readFile('data/WordCount.txt');
        expect(words).toEqual('In LDA each document may be viewed as a mixture of various '+
                                'topics where each document is considered to have a set of topics '+
                                'that are assigned to it via LDA This is similar to probabilistic '+
                                'latent semantic analysis pLSA except that in LDA the topic distribution '+
                                'is assumed to have a Dirichlet prior In practice this results in more '+
                                'reasonable mixtures of topics in a document It has been noted however that '+
                                'the pLSA model is equivalent to the LDA model under a uniform Dirichlet prior distribution');
    });
    //计数：文件中只有一个小写单词
    it('should return Array include one object when only one word', function() {
        let wordCount = WordCount.countWords('semantic');
        expect(wordCount).toEqual([{word: 'semantic', count: 1}]);
    });

    //计数：文件中只有一个大写单词
    it('should return Array include one object when only one word', function() {
        let wordCount = WordCount.countWords('Semantic');
        expect(wordCount).toEqual([{word: 'semantic', count: 1}]);
    });

    //计数：包含多个大小写单词，但无重复
    it('should return Array include many object when per word occur one time and words include lower and upper', function() {
        let wordCount = WordCount.countWords('latent semantic analysis pLSA except that in LDA the topic distribution');
        expect(wordCount).toEqual([
            {word: 'latent', count: 1},
            {word: 'semantic', count: 1},
            {word: 'analysis', count: 1},
            {word: 'plsa', count: 1},
            {word: 'except', count: 1},
            {word: 'that', count: 1},
            {word: 'in', count: 1},
            {word: 'lda', count: 1},
            {word: 'the', count: 1},
            {word: 'topic', count: 1},
            {word: 'distribution', count: 1}
        ])
    });
})
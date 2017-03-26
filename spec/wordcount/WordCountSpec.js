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

    //计数：大小写均包含，重复计数
    it('should return Array include many object when per word occur many times or one time', function() {
        let wordCount = WordCount.countWords('each document may be viewed as a topics each document a topics topics topics');
        expect(wordCount).toEqual([
            {word: 'each', count: 2},
            {word: 'document', count: 2},
            {word: 'may', count: 1},
            {word: 'be', count: 1},
            {word: 'viewed', count: 1},
            {word: 'as', count: 1},
            {word: 'a', count: 2},
            {word: 'topics', count: 4}
        ]);
    })
})
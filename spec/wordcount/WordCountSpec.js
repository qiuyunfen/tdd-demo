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

    //排序:数组长度为1
    it('should return sorted Array when Array length is 1', function() {
        let sortArr = WordCount.sortByCount([{word: 'topics', count: 4}]);
        expect(sortArr).toEqual([{word: 'topics', count: 4}]);
    });

    //排序:每个单词都有相同的count值，按在文本中出现先后排序
    it('should return sorted Array when per object has same count', function() {
        let sortArr = WordCount.sortByCount([{word: 'topics', count: 4}, {word: 'a', count: 4}]);
        expect(sortArr).toEqual([{word: 'topics', count: 4}, {word: 'a', count: 4}]);
    });

    //排序:每个单词都有不相同的count值
    it('should return sorted Array when per object has same count', function() {
        let sortArr = WordCount.sortByCount([
            {word: 'document', count: 1},
            {word: 'semantic', count: 2}, 
            {word: 'a', count: 3},
            {word: 'topics', count: 4}
        ]);
        expect(sortArr).toEqual([
            {word: 'topics', count: 4},
            {word: 'a', count: 3},
            {word: 'semantic', count: 2}, 
            {word: 'document', count: 1}
        ]);
    });

    //排序:单词有不相同的count值，单词有相同count值
    it('should return sorted Array when per object has same count', function() {
        let sortArr = WordCount.sortByCount([
            {word: 'document', count: 1},
            {word: 'semantic', count: 2}, 
            {word: 'each', count: 4},
            {word: 'a', count: 3},
            {word: 'topics', count: 4}
        ]);
        expect(sortArr).toEqual([
            {word: 'each', count: 4},
            {word: 'topics', count: 4},
            {word: 'a', count: 3},
            {word: 'semantic', count: 2}, 
            {word: 'document', count: 1}
        ]);
    });

    //输出排序后的字符串:单词数量为1
    it('should log string when Array length is 1', function() {
        let wordContStr = WordCount.print([
            {word: 'each', count: 4}
        ]);
        expect(wordContStr).toEqual('each:4\n');
    });
    
    //输出排序后的字符串:单词数量大于1
    it('should log string of sorted Array', function() {
        let wordContStr = WordCount.print([
            {word: 'each', count: 4},
            {word: 'topics', count: 4},
            {word: 'a', count: 3},
            {word: 'semantic', count: 2}, 
            {word: 'document', count: 1}
        ]);
        expect(wordContStr).toEqual('each:4\ntopics:4\na:3\nsemantic:2\ndocument:1\n');
    });

    //总方法测试
    it('should log string of sorted Array when input a text file', function() {
        let words = WordCount.wordCount('data/test.txt');
        expect(words).toEqual('topics:4\neach:4\na:3\nsemantic:2\ndocument:1\n');
    })
})
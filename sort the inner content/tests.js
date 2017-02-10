function sortTheInnerContent(words) {
    if (words === null || typeof words === "undefined") throw new Error("String is required parameter");
    singleWord = words.split(" ");
    words = "";
    for(let i = 0; i < singleWord.length; i++){
        words += sortWord(singleWord[i]) + " ";
    }
    console.log(words);
    return words.slice(0, -1);
}

function sortWord(word) {
    if (word.length < 2) return word;
    else {
        word = word.split("");
        let first = word[0];
        let last = word[word.length - 1];
        word.shift();
        word.pop();
        word = word.sort(strDes);
        word.push(last);
        word.unshift(first);
        return word.join("");
    }
}

function strDes(a, b) {
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
}

QUnit.test("test", function (assert) {
    assert.throws(function () {
        sortTheInnerContent(null);
    }, Error);

    assert.throws(function () {
        sortTheInnerContent([]);
    }, Error);
    assert.equal(sortWord("sort"), "srot");
    assert.equal(sortTheInnerContent(""), "");
    assert.equal(sortTheInnerContent("a"), "a");
    assert.equal(sortTheInnerContent("ab"), "ab");
    assert.equal(sortTheInnerContent("abc"), "abc");
    assert.equal(sortTheInnerContent("abcd"), "acbd");
    assert.equal(sortTheInnerContent("sort the inner content in descending order"), "srot the inner ctonnet in dsnnieedcg oredr");
});




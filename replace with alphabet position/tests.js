function alphabetPosition(text) {
    if (text === null || text.length === 0) throw new Error("Not empty string is required parameter");
    var replaced = [];
    for (let i = 0; i < text.length; i++) {
        let charCode = (text[i].toUpperCase()).charCodeAt();
        if (charCode > 64 && charCode < 91) {
            replaced += charCode - 64 + " ";
        }
    }
    if (replaced.length > 1)
        replaced = replaced.slice(0, -1);

    return replaced;
};

QUnit.test("test", function (assert) {
    assert.throws(function () {
        alphabetPosition(null);
    }, Error);

    assert.throws(function () {
        alphabetPosition([]);
    }, Error);

    assert.equal(alphabetPosition("aA"), "1 1");
    assert.equal(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
    assert.equal(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

});




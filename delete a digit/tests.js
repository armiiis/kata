function deleteDigit(n) {
    if (n === null || n.length === 0) throw new Error("Integer is required parameter");
    else if (n === 10) return 1;
    var nStr = n.toString();
    var stringArr = [];
    var numberArr = [];
    for (let i = 0; i < nStr.length; i++) {
        stringArr[0] = nStr.slice(1);
        stringArr[i + 1] = nStr.slice(0, (i + 1)) + nStr.slice(i + 2);
        numberArr[i] = parseInt(stringArr[i]);
    }
    stringArr.pop();
    return getMaxOfArray(numberArr);

};

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

QUnit.test("test", function (assert) {
    assert.throws(function () {
        deleteDigit(null);
    }, Error);

    assert.throws(function () {
        deleteDigit([]);
    }, Error);

    assert.equal(deleteDigit(1542), 542);
    assert.equal(deleteDigit(152), 52);
    assert.equal(deleteDigit(1001), 101);
});




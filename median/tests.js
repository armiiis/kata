function median(array) {
    if (array === null) throw new Error("input is null");
    if (array === undefined) throw new Error("input is undefined");
    if (array.length === 1) return array[0];

    array.sort(function(a, b){return a-b});
    let half = Math.floor(array.length / 2);

    if (array.length === 2) return (array[0] + array[1]) / 2;
    if (array.length === 3) return array[1];
    if (array.length % 2)
        return array[half];
    else
        return (array[half - 1] + array[half]) / 2;
}

QUnit.test("test", function (assert) {
    assert.throws(function () {
        fakeBin([]);
    }, Error);

    assert.throws(function () {
        fakeBin(null);
    }, Error);

    assert.equal(median([5]), 5);
    assert.equal(median([5, 6]), 5.5);
    assert.equal(median([7, 5, 6]), 6);
    assert.equal(median([3, 2, 1]), 2);
    assert.equal(median([33, 99, 100, 30, 29, 50]), 41.5);

});
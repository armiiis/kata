function fakeBin(x) {
    if (x === null) throw new CustomError("null is given");
    if (isNaN(x)) throw new CustomError("not a number");
    var result = "";
    let digits = x.split("");
    for (var i = 0; i < x.length; i++) {
        if (digits[i] < 5)
            result += "0";
        else if (digits[i] >= 5)
            result += "1";
    }
    return result;
}
function CustomError(message) {
    this.message = message;
}

CustomError.prototype.toString = function () {
    return this.message;
};

QUnit.test("test", function (assert) {
    assert.throws(function () {
        fakeBin(null);
    }, CustomError("null is given"));

    assert.throws(function () {
        fakeBin(1265);
    }, CustomError("integer is given"));

    assert.throws(function () {
        fakeBin('abc');
    }, CustomError("not a number"));

    assert.equal(fakeBin('-3'), '0');
    assert.equal(fakeBin('+6'), '1');
    assert.equal(fakeBin('0'), '0');
    assert.equal(fakeBin('3'), '0');
    assert.equal(fakeBin('5'), '1');
    assert.equal(fakeBin('45385593107843568'), '01011110001100111');
    assert.equal(fakeBin('509321967506747'), '101000111101101');
    assert.equal(fakeBin('366058562030849490134388085'), '011011110000101010000011011');


});
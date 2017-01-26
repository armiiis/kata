function InvalidOperationError(message) {
    this.message = message;
}


function basicOp(operation, value1, value2) {
    if (value1 === null && value2 !== null) return "value1 is null";
    if (value2 === null && value1 !== null) return "value2 is null";
    if (value1 === null && value2 === null) return "both values are null";
    switch (operation) {
        case "+":
            return value1 + value2;
            break;
        case "-":
            return value1 - value2;
            break;
        case "*":
            return value1 * value2;
            break;
        case "/":
            return value2 !== 0 ? value1 / value2 : "divisor can't be 0";
        default:
            throw new InvalidOperationError("Invalid Operator");
    }
}
QUnit.test("basic mathematical operations", function (assert) {
    assert.equal(basicOp("+", 4, 7), 11);
    assert.equal(basicOp("-", 15, 18), -3);
    assert.equal(basicOp("*", 5, 5), 25);
    assert.equal(basicOp("/", 49, 7), 7);
    assert.equal(basicOp("/", 5, 0), "divisor can't be 0");
    assert.equal(basicOp("/", 5, null), "value2 is null");
    assert.equal(basicOp("/", null, 5), "value1 is null");
    assert.equal(basicOp("/", null, null), "both values are null");

    assert.throws(function(){basicOp("*/+-", 5, 5);}, InvalidOperationError());

});
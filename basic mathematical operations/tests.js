function basicOp(operation, value1, value2){
    switch(operation){
        case "+":
            return value1+value2;
            break;
        case "-":
            return value1 - value2;
            break;
        case "*":
            return value1*value2;
            break;
        case "/":
            return value1/value2;
    }
    return "";
}
QUnit.test("basic mathematical operations", function (assert) {
    assert.equal(basicOp("+",4,7), 11);
    assert.equal(basicOp("-",15,18), -3);
    assert.equal(basicOp("*",5,5), 25);
    assert.equal(basicOp("/",49,7), 7);

});
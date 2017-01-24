function even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
QUnit.test("hello basic mathematical operations", function (assert) {
    assert.equal(even_or_odd(-2), "Even");
    assert.equal(even_or_odd(2), "Even");
    assert.equal(even_or_odd(0), "Even");
    assert.equal(even_or_odd(7), "Odd");
    assert.equal(even_or_odd(1), "Odd");
});
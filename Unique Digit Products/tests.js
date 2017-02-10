function uniqueDigitProducts(a) {
    if (a === null) throw new Error("Number is required parameter");
    else if(a.length > 10000 || a.length < 1) throw new Error("Constraints: 1 ≤ a.length ≤ 10000");
    else if(a[0] > 1000000000 || a[0] < 1) throw new Error("Constraints: 1 ≤ a[i] ≤ 1000000000");

    var digitProducts = [];
    for(let i = 0; i < a.length; i++){
        digitProducts[i] = product(a[i]);
    }

    var distinct = Array.from(new Set(digitProducts));
    var unique = [];
    for(let i = 0; i < distinct.length; i++){
        if(typeof(distinct[i]) !== "string"){
            unique.push(distinct[i]);
        }
    }
    return unique.length;
}

function product(x){
    var digits = (""+x).split("");
    x = parseInt(digits[0]);
    for(let i = 1; i < digits.length; i++){
        x *= digits[i];
    }
    return x;
}

QUnit.test("test", function (assert) {
    assert.throws(function () {
        uniqueDigitProducts(null);
    }, Error);

    assert.throws(function () {
        uniqueDigitProducts([]);
    }, Error);

    assert.throws(function () {
        uniqueDigitProducts(new Array(10001));
    }, Error);

    assert.throws(function () {
        uniqueDigitProducts([0]);
    }, Error);

    assert.throws(function () {
        uniqueDigitProducts([1000000001]);
    }, Error);

    assert.equal(product(223), 12);
    assert.equal(uniqueDigitProducts([223, 222]), 2);
    assert.equal(uniqueDigitProducts([314,223,577,503,692,909,730,673,940,837,198,199,479,559,777,441,787,819,899,460,379,115,166,557,952,759,811,501,702,587,995,336,156,119,502,3]),27);
});




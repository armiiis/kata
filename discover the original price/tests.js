function discoverOriginalPrice(discountedPrice, salePercentage) {
    if(!discountedPrice && !salePercentage)
        throw new Error("no arguments are given");
    else if (discountedPrice === null && salePercentage === null)
        throw new Error("input is null");
    else if (discountedPrice === null && salePercentage)
        throw new Error("discountedPrice is null");
    else if (discountedPrice && salePercentage === null)
        return discountedPrice;
    else
        return +(discountedPrice / (1-salePercentage/100)).toFixed(2);
}

QUnit.test("test", function (assert) {
    assert.throws(function () {
        discoverOriginalPrice(null, null);
    }, Error);

    assert.throws(function () {
        discoverOriginalPrice(null, 5);
    }, Error);

    assert.throws(function(){
        discoverOriginalPrice();
    }, Error);

    assert.equal(discoverOriginalPrice(10, null), 10);
    assert.equal(discoverOriginalPrice(75, 25), 100);
    assert.equal(discoverOriginalPrice(25, 75), 100);
    assert.equal(discoverOriginalPrice(75.75, 25), 101);


});
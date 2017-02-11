function foldArray(array, runs) {
    if (array === null || runs === null || typeof array[0] === "string")
        throw new Error("Array and number is required parameter");
    else if (array.length === 1) return array;
    else if (array.length === 2) return sum(array);
    else {
        for (let i = 0; i < runs; i++) {
            array = fold(array);
        }
        return array;
    }
}

function fold(array) {
    var firstHalf = [];
    var secondHalf = [];
    if (array.length % 2) {
        let length = Math.floor(array.length / 2);
        let middle = array[length];
        firstHalf = array.slice(0, length);
        secondHalf = array.slice(length + 1, array.length);
        secondHalf.reverse();
        return sumOf2(firstHalf, secondHalf, middle);
    } else {
        let length = Math.floor(array.length / 2);
        firstHalf = array.slice(0, length);
        secondHalf = array.slice(length, array.length);
        secondHalf.reverse();
        return sumOf2(firstHalf, secondHalf, "equal");
    }
}

function sum(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function sumOf2(array1, array2, middle) {
    var sum = [];
    if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            sum[i] = array1[i] + array2[i];
        }
        if (middle !== "equal")
            sum.push(middle);
        return sum;
    }
}


QUnit.test("test", function (assert) {
    assert.throws(function () {
        foldArray(null, null);
    }, Error);

    assert.throws(function () {
        foldArray(['aa'], 5);
    }, Error);

    assert.deepEqual(sumOf2([1, 2,], [5, 4], "equal"), [6, 6]);
    assert.deepEqual(fold([3]), [3]);
    assert.deepEqual(fold([1, 1]), [2]);
    assert.deepEqual(fold([1, 2, 3, 4, 5]), [6, 6, 3]);
    assert.deepEqual(fold([1, 2, 3, 4]), [5, 5]);
    assert.deepEqual(foldArray([1, 2, 3, 4, 5], 2), [9, 6]);
});







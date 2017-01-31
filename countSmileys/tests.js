function countSmileys(arr) {
    if (arr === null) throw new Error("Array is required parameter")
    else if (arr.length === 0) return 0;

    var validSmileyFaceCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let splittedSmiley = arr[i].split("");
        if (arr[i].length > 1) {
            if (isIncluded(splittedSmiley)) {
                validSmileyFaceCount++;
            }
        }
    }
    return validSmileyFaceCount;
}

function isIncluded(arr) {
    var validEyes = [':', ';'];
    var validNose = ['-', '~', ''];
    var validMouth = [')', 'D'];

    if (arr.length === 3) {
        if (validEyes.includes(arr[0]) &&
            validNose.includes(arr[1]) &&
            validMouth.includes(arr[2])) {
            return true;
        }
    } else if(arr.length === 2){
        if (validEyes.includes(arr[0]) &&
            validMouth.includes(arr[1])){
            return true;
        }
    }
}

QUnit.test("test", function (assert) {
    assert.throws(function () {
        countSmileys(null);
    }, Error);

    assert.equal(countSmileys([]), 0);
    assert.equal(countSmileys(['dsad dsa 156ds a* *das : _)SA ']), 0);
    assert.equal(countSmileys([':D', ':~)', ';~D', ':)']), 4);
    assert.equal(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
    assert.equal(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);


});




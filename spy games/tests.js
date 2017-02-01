function decrypt(code) {
    if (code === null || code === undefined)
        throw new Error("String is required parameter");
    else if (code === "") return "";

    var arr = [{key: 0, letter: " "}];
    generateDecryptArr(arr);

    var uncryptedLetter = code.split(" ");
    var decryptedWord = "";

    for (let i = 0; i < uncryptedLetter.length; i++) {
        let num = decryptLetter(uncryptedLetter[i]);
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].key === num) {
                decryptedWord += arr[j].letter;
            }
        }
    }
    return decryptedWord;
}

function generateDecryptArr(arr) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 1; i < 27; i++) {
        arr.push({key: i, letter: alphabet[i - 1]});
    }
    return arr;
}

function decryptLetter(letter) {
    var splitted = letter.split("");
    var sum = 0;
    for (let i = 0; i < splitted.length; i++) {
        if (!isNaN(splitted[i])) {
            sum += parseInt(splitted[i]);
        }
    }
    if (sum > 26) {
        sum -= 27;
    }
    return sum;
}


QUnit.test("test", function (assert) {
    assert.throws(function () {
        decrypt(null);
    }, Error);

    assert.throws(function () {
        decrypt([]);
    }, Error);


    assert.equal(decrypt(""), "");
    assert.equal(decrypt("0"), " ");
    assert.equal(decrypt('x20*6<xY y875_r97L'), 'hi');
    assert.equal(decrypt('8S6 K00= 3Ob28W4'), 'n q');
    assert.equal(decrypt('2@I51Rk 6@95I4R8k B23A1W6BZ O231I!W6BZ 3k&4E7h1'), 'hello');


});




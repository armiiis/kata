var snakesAndLadders = function (board, dice) {
    if (board === null || dice === null) throw new Error("Null is given");
    if (board.length === 0) throw new Error("Empty board is given");
    if(dice.length === 0) return board[0];

    var lastPos = board.length;
    var endingPos;
    var myPosition = 0;

    for (let i = 0; i < dice.length; i++) {
        let diceRoll = dice[i];

        if ((myPosition + diceRoll) < lastPos) {
            myPosition += diceRoll
            endingPos = myPosition;
        }
        if(board[myPosition] !== 0){
            if((myPosition + board[myPosition]) < lastPos){
                myPosition += board[myPosition];
                endingPos = myPosition;
            }
        }
    }
    return myPosition;
};

QUnit.test("test", function (assert) {
    assert.throws(function () {
        snakesAndLadders(null, null);
    }, Error);

    assert.throws(function () {
        snakesAndLadders([], [1,2,3]);
    }, Error);

    assert.equal(snakesAndLadders([0], [0]), 0);
    assert.equal(snakesAndLadders([0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0], [2, 1, 5, 1, 5, 4]), 10);

});




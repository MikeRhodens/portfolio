function Guess(x, y) {
    this.x = x;
    this.y = y;
    var i;

    this.newWord = function (word) {
        this.word = word.toUpperCase();
        this.guessedLetters = [];

        for (i = 1; i <= this.word.length; i++) {
            this.guessedLetters.push('');
        }
        console.log(this.word.length,this.guessedLetters);
    };

    this.checkGuess = function (letter) {
        return this.word.indexOf(letter) > -1;
    };

    this.update = function (chosenLetter) {
        for (i = 0; i < this.word.length; i++) {
            if (this.word.charAt(i) == chosenLetter) {
                this.guessedLetters[i] = chosenLetter;
            }
        }
    };
    this.draw = function (context) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineWidth = 3;
        context.strokeStyle = 'black';
        for (i = 1; i <= this.word.length; i++) {
            context.lineTo(x + 40 * i, y);
            context.moveTo(x + (40 * i ) + 5, y);
            context.fillText(this.guessedLetters[i - 1], x + (40 * (i - 1) + 3), y - 3);
        }
        context.stroke();
    }
}

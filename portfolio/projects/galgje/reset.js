function ResetButton(x, y, Ex, Ey) {
    this.x = x;
    this.y = y;
    this.Ex = Ex;
    this.Ey = Ey;
    var i;

    this.reset = function(lives,clickedLetters,guessedLetters,word,condition){
        var newWord = prompt("Please enter A new word",'');
        lives = 11;
        clickedLetters =[
            '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
            '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
            '0', '0', '0', '0', '0', '0'
        ];
        guessedLetters = [];
        for (i = 0; i < newWord.length; i++) {
            guessedLetters.push('');
        }
        condition = 'playing';
        return [lives,clickedLetters,guessedLetters,condition,newWord];
    };

    this.resetRandom = function(lives,clickedLetters,guessedLetters,word,condition,randWord){
        var newWord = randWord;
        lives = 11;
        clickedLetters =[
            '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
            '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
            '0', '0', '0', '0', '0', '0'
        ];
        guessedLetters = [];
        for (i = 0; i < newWord.length; i++) {
            guessedLetters.push('');
        }
        condition = 'playing';
        return [lives,clickedLetters,guessedLetters,condition,newWord];
    };

    this.draw = function (context) {
       // context.fillStyle = 'green';
       // context.fillRect(this.x, this.y, this.Ex, this.Ey);
        context.fillStyle = 'black';
        context.fillText('reset',this.x,this.y+30);
    }
}

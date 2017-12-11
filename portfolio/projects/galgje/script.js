window.addEventListener("load", function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");


    var hangman = new Hangman(context);
    var alphabet = new Alphabet(300, 90);
    var guess = new Guess(300, 400);
    var mouse = new utils.captureMouse(canvas);
    var randomButton = new RandomButton(150, 25, 150, 35);
    var resetButton = new ResetButton(600, 25, 100, 35);
    var condition = 'playing';
    var lives = 11;
    var i;
    var resetArray;
    var allText;
    var lowerWord;
    var randomWordArray = [];
    readTextFile("words.txt");
    var newText = allText.replace(/\n/g, ",");
    newText = newText.replace(/[^a-zA-Z,]/g, "");
    randomWordArray = newText.split(',');

    addEventListener('click', function () {
        if (mouse.x > 300 && mouse.y > 90 && mouse.x < 700 && mouse.y < 220) {
            var posX = Math.floor((mouse.x - 300) / 40);
            var posY = Math.floor((mouse.y - 90) / 40);
            var chosenLetter = alphabet.checkpos(posX, posY);
            var clickedPos = alphabet.alphabetArray.indexOf(chosenLetter);
            if (guess.checkGuess(chosenLetter)) {
                alphabet.clickedLetters[clickedPos] = '1';
                guess.update(chosenLetter);
            } else {
                if (alphabet.clickedLetters[clickedPos] != '2') {
                    alphabet.clickedLetters[clickedPos] = '2';
                    lives = lives - 1;
                }
            }
        }

        if (mouse.x > resetButton.x && mouse.y > resetButton.y && mouse.x < (resetButton.x + resetButton.Ex) && mouse.y < (resetButton.y + resetButton.Ey)) {
            resetArray = resetButton.reset(lives, alphabet.clickedLetters, guess.guessedLetters, guess.word, condition);
            lives = resetArray[0];
            alphabet.clickedLetters = resetArray[1];
            guess.guessedLetters = resetArray[2];
            condition = resetArray[3];
            guess.newWord(resetArray[4]);
        }

        if (mouse.x > randomButton.x && mouse.y > randomButton.y && mouse.x < (randomButton.x + randomButton.Ex) && mouse.y < (randomButton.y + randomButton.Ey)) {
            resetArray = resetButton.resetRandom(lives, alphabet.clickedLetters, guess.guessedLetters, guess.word, condition, randomWordArray[Math.floor(Math.random() * randomWordArray.length)])
            lives = resetArray[0];
            alphabet.clickedLetters = resetArray[1];
            guess.guessedLetters = resetArray[2];
            condition = resetArray[3];
            guess.newWord(resetArray[4]);
        }
    });
    tempnum = Math.floor(Math.random() * randomWordArray.length);
    temp = randomWordArray[tempnum];
    guess.newWord(temp);



    (function animateCanvas() {
        window.requestAnimationFrame(animateCanvas);
        context.clearRect(0, 0, 850, 450);
        resetButton.draw(context);
        randomButton.draw(context);
        guess.draw(context);
        alphabet.draw(context);
        hangman.drawGhost(context);
        for (i = 1; i <= 11 - lives; i++) {
            hangman.draw(context, i);
        }

        for (i = 0; i < alphabet.clickedLetters.length; i++) {
            if (alphabet.clickedLetters[i] == '2') {
                alphabet.drawCross(context, i);
            } else if (alphabet.clickedLetters[i] == '1') {
                alphabet.drawCheck(context, i);
            }
        }

        checkWinLost(lives, guess.guessedLetters);
        if (condition == 'losing') {
            lowerWord = guess.word.toLowerCase();
            context.fillText('You lost :\'(', 300, 260);
            context.fillText('the word was ' + lowerWord, 300, 310);
        } else if (condition == 'winning') {
            context.fillText('You have won :D', 300, 300);
        }
    })();
    function readTextFile(file) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    allText = rawFile.responseText;

                }
            }
        };
        rawFile.send(null);

    }

    function checkWinLost(lives, lettersArray) {
        if (lives < 1) {
            condition = 'losing';
        }
        if (lettersArray.indexOf('') == -1) {
            condition = 'winning';
        }

    }
});



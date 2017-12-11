function Alphabet(x, y) {
    var i;
    this.x = x;
    this.y = y;
    this.height = y;
    this.width = 0;
    this.alphabetArray = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    this.horizontalPos = [
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
        ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
        ['U', 'V', 'W', 'X', 'Y', 'Z']
    ];
    this.verticalPos = [
        ['A', 'K', 'U'],
        ['B', 'L', 'V'],
        ['C', 'M', 'W'],
        ['D', 'N', 'X'],
        ['E', 'O', 'Y'],
        ['F', 'P', 'Z'],
        ['G', 'Q'],
        ['H', 'R'],
        ['I', 'S'],
        ['J', 'T']
    ];
    this.clickedLetters = [
        '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
        '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
        '0', '0', '0', '0', '0', '0'
    ];

    this.checkpos = function (x, y) {
        for (i = 0; i < this.verticalPos[x].length; i++) {
            if (this.horizontalPos[y].indexOf(this.verticalPos[x][i]) != -1) {
                return this.verticalPos[x][i];
            }
        }
    };

    this.drawCross = function (context, pos) {
        var a = pos;
        var posY = 0;
        while (a >= 10) {
            posY += 1;
            a -= 10;
        }
        var posX = pos - (posY * 10);
        var baseX = this.x + (posX * 40);
        var baseY = this.y + (posY * 40);
        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = 'red';
        context.moveTo(baseX + 0, baseY + 0);
        context.lineTo(baseX + 40, baseY + 40);
        context.moveTo(baseX + 40, baseY + 0);
        context.lineTo(baseX + 0, baseY + 40);
        context.stroke();
    };
    this.drawCheck = function (context, pos) {
        var a = pos;
        var posY = 0;
        while (a >= 10) {
            posY += 1;
            a -= 10;
        }
        var posX = pos - (posY * 10);
        var baseX = this.x + (posX * 40);
        var baseY = this.y + (posY * 40);
        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = 'green';
        context.moveTo(baseX + 0, baseY + 20);
        context.lineTo(baseX + 20, baseY + 40);
        context.lineTo(baseX + 40, baseY + 0);
        context.stroke();
    };


    this.draw = function (context) {
        this.height = y;
        this.width = 0;
        context.font = '45px Arial';
        for (i = 0; i < this.alphabetArray.length; i++) {
            if ((i % 10) == 0) {
                this.height = this.height + 40;
                this.width = 0;
            } else {
                this.width = this.width + 40;
            }

            context.fillText(this.alphabetArray[i], x + (this.width), this.height);

        }
    };
}
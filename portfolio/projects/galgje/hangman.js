function Hangman() {


    this.drawGhost = function (ctx) {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#a8a8a8';
        ctx.moveTo(250, 400);
        ctx.lineTo(50, 400);
        ctx.moveTo(75, 400);
        ctx.lineTo(75, 100);
        ctx.moveTo(75, 125);
        ctx.lineTo(100, 100);
        ctx.moveTo(50, 100);
        ctx.lineTo(175, 100);
        ctx.moveTo(175, 100);
        ctx.lineTo(175, 150);
        ctx.moveTo(195, 170);
        ctx.arc(175, 170, 20, 0, 2 * Math.PI);
        ctx.moveTo(175, 190);
        ctx.lineTo(175, 275);
        ctx.moveTo(175, 200);
        ctx.lineTo(150, 250);
        ctx.moveTo(175, 200);
        ctx.lineTo(200, 250);
        ctx.moveTo(175, 275);
        ctx.lineTo(150, 350);
        ctx.moveTo(175, 275);
        ctx.lineTo(200, 350);
        ctx.stroke();
    };


    this.draw = function (ctx, status) {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#000000';
        switch (status) {
            case 1:
                //vloer
                ctx.moveTo(250, 400);
                ctx.lineTo(50, 400);
                break;
            case 2:
                //paal omhoog
                ctx.moveTo(75, 400);
                ctx.lineTo(75, 100);
                break;
            case 3:
                //schuine paal
                ctx.moveTo(75, 125);
                ctx.lineTo(100, 100);
                break;
            case 4:
                //boven lijn
                ctx.moveTo(50, 100);
                ctx.lineTo(175, 100);
                break;
            case 5:
                //touw
                ctx.moveTo(175, 100);
                ctx.lineTo(175, 150);
                break;
            case 6:
                //hoofd
                ctx.moveTo(195, 170);
                ctx.arc(175, 170, 20, 0, 2 * Math.PI);
                break;
            case 7:
                //lijf
                ctx.moveTo(175, 190);
                ctx.lineTo(175, 275);
                break;
            case 8:
                //arm links
                ctx.moveTo(175, 200);
                ctx.lineTo(150, 250);
                break;
            case 9:
                //arm rechts
                ctx.moveTo(175, 200);
                ctx.lineTo(200, 250);
                break;
            case 10:
                //been links
                ctx.moveTo(175, 275);
                ctx.lineTo(150, 350);
                break;
            case 11:
                //been links
                ctx.moveTo(175, 275);
                ctx.lineTo(200, 350);
                break;
        }
        ctx.stroke();
    };
}

function RandomButton(x, y, Ex, Ey) {
    this.x = x;
    this.y = y;
    this.Ex = Ex;
    this.Ey = Ey;

    this.draw = function (context) {
        //context.fillStyle = 'green';
        //context.fillRect(this.x, this.y, this.Ex, this.Ey);
        context.fillStyle = 'black';
        context.fillText('random', this.x, this.y + 30);
    }
}
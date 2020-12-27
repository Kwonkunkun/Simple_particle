export class Rain {
    constructor(x, y, l, v) {
        this.x = x;
        this.y = y;
        this.vy = v;
        this.l = l;
    }
    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.l);
        ctx.stroke();
        ctx.closePath();
        this.fall();
    }

    fall() {
        this.y += this.vy;

        if (this.y > this.stageHeight) {
            this.x = Math.floor(Math.random() * this.stageWidth) + 5;
            this.y = Math.floor(Math.random() * 100) - 100;
            this.l = Math.floor(Math.random() * 30) + 1;
            this.v = Math.floor(Math.random() * 12) + 4;
        }
    }
}

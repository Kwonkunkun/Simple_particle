"use strict";
export default class Snow {
    constructor(x, y, radius, v) {
        this.x = x;
        this.y = y;
        this.vy = v;
        this.radius = radius;
    }
    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        this.fall();
    }

    fall() {
        this.y += this.vy;

        if (this.y > this.stageHeight) {
            this.x = Math.floor(Math.random() * this.stageWidth) + 5;
            this.y = Math.floor(Math.random() * 100) - 100;
            this.radius = Math.floor(Math.random() * 5) + 2;
            this.vy = Math.floor(Math.random() * 3) + 1;
        }
    }
}

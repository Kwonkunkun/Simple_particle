"use strict";
export default class Particle {
    //가운데에 두려고.. ㅋㅋㅋㅋㅋㅋ
    constructor(
        stageWidth,
        stageHeight,
        pngWidth,
        pngHeight,
        x,
        y,
        color,
        size,
        onEffect
    ) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        if (onEffect) {
            this.x = Math.random() * this.stageWidth;
            this.y = Math.random() * this.stageHeight;
        } else {
            this.x = x + stageWidth / 2 - pngWidth * 2;
            this.y = y + stageHeight / 2 - 50 - pngHeight * 2;
        }
        this.color = color;
        this.size = size;
        this.baseX = x + stageWidth / 2 - pngWidth * 2;
        this.baseY = y + stageHeight / 2 - 50 - pngHeight * 2;
        this.density = Math.random() * 10 + 2;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw(ctx, mouse) {
        this.update(ctx, mouse);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    update(ctx, mouse) {
        ctx.fillStyle = this.color;

        //collision detection
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;

        //max distance, past that the force will be 0
        const maxDistance = 100;
        let force = (maxDistance - distance) / maxDistance;
        if (force < 0) force = 0;

        let directionX = forceDirectionX * force * this.density * 3;
        let directionY = forceDirectionY * force * this.density * 3;

        if (distance < mouse.radius + this.size) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 50;
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 50;
            }
        }
    }
}

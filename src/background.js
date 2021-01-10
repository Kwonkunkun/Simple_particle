"use strict";
const VERSION = 2;

export default class Background {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.num = 1;
        this.backgroundImg = new Image(this.width, this.height);
        this.backgroundImg.src = `./Img/ver_${VERSION}/background1.png`;
        this.backgroundChangBtn = document.querySelector(".background");
        this.icon = this.backgroundChangBtn.querySelector("i");
        this.backgroundChangBtn.addEventListener("click", () => {
            if (this.num === 1) {
                this.icon.classList.remove("fa-moon");
                this.icon.classList.add("fa-sun");
            } else if (this.num === 2) {
                this.icon.classList.remove("fa-sun");
                this.icon.classList.add("fa-cloud");
            } else {
                this.icon.classList.remove("fa-cloud");
                this.icon.classList.add("fa-moon");
            }
            this.num++;
            if (this.num > 3) {
                this.num = 1;
            }
            this.backgroundImg.src = `./Img/ver_${VERSION}/background${this.num}.png`;
        });
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    //중앙 기준 x, y임
    draw(ctx, x, y) {
        ctx.drawImage(
            this.backgroundImg,
            x - this.width / 2,
            y - this.height / 2 - 50,
            this.width,
            this.height
        );
    }
}

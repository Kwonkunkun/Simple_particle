"use strict";
import Particle from "./particle.js";

export default class ParticleGroup {
    constructor(ctx, stageWidth, stageHeight, png, width, height) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.pngWidth = width;
        this.pngHeight = height;
        png.width = width;
        png.height = height;

        //데이터를 얻어오기 위해서는 일단 그려놔야함
        ctx.drawImage(png, 0, 0, this.pngWidth, this.pngHeight);
        this.data = ctx.getImageData(0, 0, this.pngWidth, this.pngHeight);
        //여기서 지워줘도 되고 안지워줘도 되고 맘대루

        this.init();
    }

    init() {
        //4*하는 이유는 data는 rgba순임으로!! 각 픽셀의 색을 얻어와서 다시 그려주는거임!!
        this.particleGroup = [];
        for (let y = 0; y < this.data.height; y += 2) {
            for (let x = 0; x < this.data.width; x += 2) {
                if (this.data.data[y * 4 * this.data.width + x * 4 + 3] > 128) {
                    let positionX = x;
                    let positionY = y;
                    let color =
                        "rgba(" +
                        this.data.data[y * 4 * this.data.width + x * 4] +
                        "," +
                        this.data.data[y * 4 * this.data.width + x * 4 + 1] +
                        "," +
                        this.data.data[y * 4 * this.data.width + x * 4 + 2];
                    (")");

                    //4배큰 친구를 만드는겨
                    this.particleGroup.push(
                        new Particle(
                            this.stageWidth,
                            this.stageHeight,
                            this.pngWidth,
                            this.pngHeight,
                            positionX * 4,
                            positionY * 4,
                            color,
                            6
                        )
                    );
                }
            }
        }
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.init();
    }

    draw(ctx, mouse) {
        if (this.data === undefined) {
            this.init();
        }
        for (let i = 0; i < this.particleGroup.length; i++) {
            this.particleGroup[i].draw(ctx, mouse);
        }
    }
}

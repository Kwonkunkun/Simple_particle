"use strict";
import Snow from "./snow.js";

export default class SnowGroup {
    constructor(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.init();
    }

    init() {
        this.rainGroup = (() => {
            let temp = new Array();
            for (let i = 0; i < 30; i++) {
                const rain = new Snow(
                    Math.random() * this.stageWidth,
                    Math.random() * this.stageHeight,
                    Math.random() * 5 + 2,
                    Math.random() * 3 + 1
                );
                rain.resize(this.stageWidth, this.stageWidth);
                temp.push(rain);
            }
            return temp;
        })();
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.init();
    }

    draw(ctx) {
        this.rainGroup.forEach((element) => {
            element.draw(ctx);
        });
    }
}

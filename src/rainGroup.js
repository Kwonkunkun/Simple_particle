"use strict";
import Rain from "./rain.js";

export default class RainGroup {
    constructor(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.init();
    }

    init() {
        this.rainGroup = (() => {
            let temp = new Array();
            for (let i = 0; i < 30; i++) {
                const rain = new Rain(
                    Math.random() * this.stageHeight,
                    Math.random() * this.stageHeight,
                    Math.random() * 3 + 1,
                    Math.random() * 4 + 5
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

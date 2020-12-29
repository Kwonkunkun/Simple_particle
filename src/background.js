export class Background {
    constructor(img) {
        this.img = img;
        this.fps = 24;
        this.fpsTime = 1000 / this.fps;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }
    draw(ctx, t) {}

    animate(ctx) {}
}

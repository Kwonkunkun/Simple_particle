"use strict";
export default class Preloader {
    constructor() {}

    static series(imageArray) {
        let n = imageArray.length;
        for (let i = 0; i < n; i++) {
            let img = new Image();
            img.src = imageArray[i];
        }
    }

    static parallel(imageArray, idx) {
        let index = idx || 0;
        if (imageArray && imageArray.length > index) {
            let img = new Image();
            img.onload = function () {
                Preloader.parallel(imageArray, index + 1);
            };
            img.src = imageArray[index];
        }
    }

    static inject(id) {
        let div = document.createElement("div");
        div.id = id;
        div.style.position = "absolute";
        div.style.top = "-9999px";
        div.style.left = "-9999px";
        document.body.appendChild(div);
    }
}

//출처: https://mygumi.tistory.com/277 [마이구미의 HelloWorld]

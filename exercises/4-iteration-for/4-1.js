"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


drawBackground();

function drawBackground (){
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "white";
    drawlines();
}

function drawlines(){
    let step = 20;
    let amountWidth = width / step;
    let amountHeight = height / step
    for(let i = 0; i < amountWidth; i++) {
        Utils.drawLine(step *i, 0, width - (step *i), height);
    }
    for(let i = 0; i < amountHeight; i++) {
        Utils.drawLine(0, step *i, width, height - (step*i));
    }
}

"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawbubbles();

function drawbubbles() {
    let radius = 50;
    let margin = 400;
    let offset = 200;
    for(let i = 0; i < 100; i++ ){
    Utils.drawCircle((Math.random()* (width - margin)) + offset, (Math.random()* (height - margin)) + offset, radius * Math.random());
}
}
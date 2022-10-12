"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

let size = 500;
let x = 100;
let y = 100;


function drawRect(){

    context.fillStyle = randomColor();
    context.fillRect(x, y, size, size);
    changeSizeRect();
}

function randomColor(){

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    
    let color = "rgb(" + r + "," + g + "," + b +")";
    return color;

}

function changeSizeRect() {

    x = x + 25
    y = y + 25
    size = size - 50

}

drawRect();
drawRect();
drawRect();
drawRect();
drawRect();
drawRect();
drawRect();
drawRect();

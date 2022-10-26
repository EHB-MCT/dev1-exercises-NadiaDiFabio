"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 100;

context.fillStyle = "#ecf0f1";
context.beginPath();
context.rect(margin, 50);
context.fill();
"use strict";

writeName();

function writeName() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 7;

    //N
    context.strokeStyle = "#E0BBE4";
    context.beginPath();
    context.moveTo(100, 500);
    context.lineTo(100, 200);
    context.stroke();

    context.beginPath();
    context.moveTo(100, 200);
    context.lineTo(200, 500);
    context.stroke();

    context.beginPath();
    context.moveTo(200, 500);
    context.lineTo(200, 200);
    context.stroke();

    //A
    context.strokeStyle = "#957DAD"
    context.beginPath();
    context.moveTo(300, 500);
    context.lineTo(400, 200);
    context.stroke();

    context.beginPath();
    context.moveTo(400, 200);
    context.lineTo(500, 500);
    context.stroke();

    context.beginPath();
    context.moveTo(334, 400);
    context.lineTo(466, 400);
    context.stroke();

    //D
    context.strokeStyle = "#D291BC"
    context.beginPath();
    context.moveTo(600, 500);
    context.lineTo(600, 200);
    context.stroke();

    context.beginPath();
    context.moveTo(600, 200);
    context.lineTo(650, 200);
    context.stroke();

    context.beginPath();
    context.moveTo(650, 200);
    context.lineTo(750, 300);
    context.stroke();

    context.beginPath();
    context.moveTo(750, 300);
    context.lineTo(750, 400);
    context.stroke();

    context.beginPath();
    context.moveTo(750, 400);
    context.lineTo(650, 500);
    context.stroke();

    context.beginPath();
    context.moveTo(650, 500);
    context.lineTo(600, 500);
    context.stroke();

    //I
    context.strokeStyle = "#FEC8D8"
    context.beginPath();
    context.moveTo(775, 500);
    context.lineTo(975, 500);
    context.stroke();

    context.beginPath();
    context.moveTo(875, 500);
    context.lineTo(875, 200);
    context.stroke();

    context.beginPath();
    context.moveTo(775, 200);
    context.lineTo(975, 200);
    context.stroke();

    //A
    context.strokeStyle = "#c6e2e9"
    context.beginPath();
    context.moveTo(1075, 500);
    context.lineTo(1175, 200);
    context.stroke();

    context.beginPath();
    context.moveTo(1175, 200);
    context.lineTo(1275, 500);
    context.stroke();

    context.beginPath();
    context.moveTo(1109, 400);
    context.lineTo(1241, 400);
    context.stroke();

}


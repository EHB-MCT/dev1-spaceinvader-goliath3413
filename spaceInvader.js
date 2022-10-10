"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

joe();

function joe() {
    context.fillRect(0, 0, 300, 300);
    context.stroke();
    
    context.beginPath();
    context.rect(50, 0, 50, 50);
    context.fillStyle = '#7FFF00';
    context.fill();

    context.beginPath();
    context.rect(50, 50, 50, 50);
    context.fillStyle = '#7FFF00';
    context.fill();

    context.beginPath();
    context.rect(0, 50, 50, 50);
    context.fillStyle = '#7FFF00';
    context.fill();

    context.beginPath();
    context.rect(200, 0, 50, 50);
    context.fillStyle = '#7FFF00';
    context.fill();

    context.beginPath();
    context.rect(200, 50, 50, 50);
    context.fillStyle = '#7FFF00';
    context.fill();

    context.beginPath();
    context.rect(250, 50, 50, 50);
    context.fillStyle = '#7FFF00';
    context.fill();

    context.beginPath();
    context.rect(50, 200, 50, 50);
    context.fillStyle = '#7FFF00';
    context.fill();

    context.beginPath();
    context.rect(0, 200, 50, 50);
    context.fillStyle = '#7FFF00';
    context.fill();

    context.beginPath();
    context.rect(50, 150, 50, 50);
    context.fillStyle = '#7FFF00';
    context.fill();

    context.beginPath();
    context.rect(100, 200, 50, 50);
    context.fillStyle = '#7FFF00';
    context.fill();

    context.beginPath();
    context.rect(150, 200, 50, 50);
    context.fillStyle = '#7FFF00';
    context.fill();

    context.beginPath();
    context.rect(200, 150, 50, 50);
    context.fillStyle = '#7FFF00';
    context.fill();

    context.beginPath();
    context.rect(250, 200, 50, 50);
    context.fillStyle = '#7FFF00';
    context.fill();

    context.beginPath();
    context.rect(200, 200, 50, 50);
    context.fillStyle = '#7FFF00';
    context.fill();

}
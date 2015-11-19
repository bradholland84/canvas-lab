/*
    Script for index.html

    See the README.md file for instructions
    https://github.com/drstearns/canvas-lab/blob/master/README.md
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    var canvas = document.getElementById('canvas');
    var picker = document.getElementById('line-color-inp');
    var slider = document.getElementById('line-size-inp');
    var c = canvas.getContext('2d');
    var mouseIsDown = false;

    var clickPath = function() {
        c.beginPath();
        mouseIsDown = true;
    };

    var releasePath = function() {
        mouseIsDown = false;
    };

    var movePath = function() {
        var pos = getMousePos();
        c.lineTo(pos.x, pos.y);
        c.stroke();
    };

    var getMousePos = function() {
        var rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        }
    };

    var changeColor = function() {
        c.strokeStyle = String(picker.value);
    };
    var changeSize = function() {
        c.lineWidth = slider.value;
    };

    canvas.addEventListener('mousedown', clickPath);
    canvas.addEventListener('mouseup', releasePath);
    canvas.addEventListener('mousemove', function() {
        if (mouseIsDown) {
            movePath();
        }
    });
    picker.addEventListener('change', changeColor);
    slider.addEventListener('change', changeSize);



}); //DOMContentLoaded

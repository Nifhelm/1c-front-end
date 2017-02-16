var canvas = document.getElementById("sandbox")
    , context = canvas.getContext("2d")
    , square, circle;
circle = new Path2D();
square = new Path2D();
/* Круг и деления */
circle.arc(150, 150, 150, 0, 2 * Math.PI);
context.lineWidth = 1;
context.strokeStyle = "#000000";
context.stroke(circle);
var R = 300 / 2
    , d, angle, pX, pY, qX, qY;
var d, angle, pX, pY, qX, qY;
for (d = 0; d < 60; ++d) {
    angle = (d / 60) * (2 * Math.PI);
    pX = Math.cos(angle) * R;
    pY = -Math.sin(angle) * R;
    qX = 0.9 * pX;
    qY = 0.9 * pY;
    pX += R;
    pY += R;
    qX += R;
    qY += R;
    square.moveTo(qX, qY);
    square.lineTo(pX, pY);
    context.stroke(square);
}
/* Стрелки */
var minute = new Path2D();
var hour = new Path2D();
var second = new Path2D();
var date = new Date()
    , hs, ms, ss;
hs = date.getHours();
ms = date.getMinutes();
ss = date.getSeconds();
console.log(hs, ms, ss);
ssAngle = (ss / 60) * (2 * Math.PI);
msAngle = (ms / 60) * (2 * Math.PI);
hsAngle = ((hs % 12) / 12) * (Math.PI);
ssAngle = Math.PI / 2 - ssAngle;
msAngle = Math.PI / 2 - msAngle;
hsAngle = Math.PI / 2 - hsAngle;
var R = 300 / 2
    , hpX, hpY, hqX, hqY;
hpX = Math.cos(hsAngle) * R;
hpY = -Math.sin(hsAngle) * R;
hpX = 0.5 * hpX;
hpY = 0.5 * hpY;
hpX += R;
hpY += R;
context.lineWidth = 10;
hour.moveTo(150, 150);
hour.lineTo(hpX, hpY);
context.strokeStyle = "#000000";
context.stroke(hour);

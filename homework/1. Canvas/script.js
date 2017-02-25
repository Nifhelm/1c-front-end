var canvas = document.getElementById("sandbox")
    , context = canvas.getContext("2d")
    , square, circle;



function krug() {

    circle = new Path2D();
    square = new Path2D();

    circle.arc(150, 150, 150, 0, 2 * Math.PI);
    context.lineWidth = 1;
    context.strokeStyle = "#000000";
    context.stroke(circle);

    var R = 300 / 2, d, angle, pX, pY, qX, qY;
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
}


function strelki() {
    var minute = new Path2D();
    var hour = new Path2D();
    var second = new Path2D();
    var date = new Date(), hs, ms, ss;

    hs = date.getHours();
    ms = date.getMinutes();
    ss = date.getSeconds();
    console.log(hs, ms, ss);

    ssAngle = (ss / 60) * (2 * Math.PI);
    msAngle = (ms / 60) * (2 * Math.PI);
    hsAngle = ((hs % 12) / 12) * (2 * Math.PI);

    ssAngle = Math.PI / 2 - ssAngle;
    msAngle = Math.PI / 2 - msAngle;
    hsAngle = Math.PI / 2 - hsAngle;

    var R = 300 / 2, hpX, hpY;
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
    var R = 300 / 2, mpX, mpY;

    mpX = Math.cos(msAngle) * R;
    mpY = -Math.sin(msAngle) * R;
    mpX = 0.7 * mpX;
    mpY = 0.7 * mpY;
    mpX += R;
    mpY += R;
    context.lineWidth = 7;
    minute.moveTo(150, 150);
    minute.lineTo(mpX, mpY);
    context.strokeStyle = "#000000";
    context.stroke(minute);
    var R = 300 / 2, spX, spY;

    spX = Math.cos(ssAngle) * R;
    spY = -Math.sin(ssAngle) * R;
    spX = 0.9 * spX;
    spY = 0.9 * spY;
    spX += R;
    spY += R;
    context.lineWidth = 5;
    second.moveTo(150, 150);
    second.lineTo(spX, spY);
    context.strokeStyle = "#FF0000";
    context.stroke(second);
    }


function DrawWatch() {
    context.clearRect(0, 0, 300, 300);
    krug();
    strelki();
    setTimeout(DrawWatch, 1000)
}
DrawWatch();

var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"),
    line = new Path2D(),
    square, circle;

square = new Path2D();
square.moveTo(50, 50);
square.lineTo(250, 50);
square.lineTo(250, 250);
square.LineTo(50, 250);
square.lineTo(50, 50);

context.stroke(square);
12121
circle = new Path2D();
circle.arc(150, 150, 100, 0, 2 * Math.PI);

context.fill(circle);

line.moveTo(0, 0);
line.lineTo(300, 300);

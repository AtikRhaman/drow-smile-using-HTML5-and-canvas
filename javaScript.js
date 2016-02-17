// set up!
var smile_canvas = document.getElementById("atik");
var context = smile_canvas.getContext("2d");

// face circle
context.fillStyle = "yellow";
context.beginPath();
context.arc(100, 100, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 1;
context.stroke();
context.fillStyle = "black";

//left eye
context.beginPath();
context.arc(80, 90, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

//right eye
context.beginPath();
context.arc(114, 90, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

//mouth
context.beginPath();
context.arc(100, 105, 28, Math.PI, 2*Math.PI, true);
context.clip();
context.fill();



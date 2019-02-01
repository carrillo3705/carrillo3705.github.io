
var a;
var imgX = 900;
var imgY = 250;
var imgW = 300;
var imgH = 300;

var ballX = 900;
var ballY = 700;
var ballW = 100;
var ballH = 100;

function initialize()
{

    drawBackground();
    //draw a red rectangle to animate
    var ctx= document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(pic1,imgX,imgY,imgH,imgW);
ctx.shadowBlur = 0;

}


function drawBackground()
{
checkRectangle();
checkBall();
   drawRectangles();
    drawCircles();

    checkRectangle();
checkBall();
}


function animate()
{
a = requestAnimationFrame(animate);
drawBackground();
moveImageRight();
checkRectangle();
moveBeachBall();
checkBall();
}


function startAnimation()
{
    animate();
}



function checkRectangle()
{
    if (imgX > 1650)
    {
        moveAmountX = moveAmountX*(-1);
    }
    if (imgX < 0)
    {
        moveAmountX = moveAmountX*(-1);
    }
    if (imgY > 200)
    {
        moveAmountY = moveAmountY*(-1);
    }
    if (imgY < 350)
    {
        moveAmountY = moveAmountY*(-1);
    }


}

function checkBall()
{
    if (ballX > 1800)
    {
        ballMoveAmountX = ballMoveAmountX*(-1);
    }
    if (ballX < 0)
    {
        ballMoveAmountX = ballMoveAmountX*(-1);
    }
    if (ballY > 550)
    {
        ballMoveAmountY = ballMoveAmountY*(-1);
    }
    if (ballY < 701)
    {
        ballMoveAmountY = ballMoveAmountY*(-1);
    }

}










function stopAnimation()
{
    cancelAnimationFrame(a);
}

var moveAmountX = 3;
var moveAmountY = 3;

var ballMoveAmountX = 1;
var ballMoveAmountY = 1;

function moveBeachBall()
{
    var ctx= document.getElementById("myCanvas").getContext("2d");
    ballX = ballX + ballMoveAmountX;
    ballY = ballY + ballMoveAmountY;
    ctx.drawImage(pic2, ballX, ballY, ballH, ballW);
    ctx.shadowBlur = 0;
}





function moveImageRight()
{
    var ctx= document.getElementById("myCanvas").getContext("2d");
imgX = imgX + moveAmountX;
imgY = imgY + moveAmountY;
    ctx.drawImage(pic1, imgX, imgY, imgH, imgW);
ctx.shadowBlur= 0;
}

function drawRectangles() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#c2b280";
    ctx.fillRect(0, 700, 1875, 300);
    ctx.shadowBlur = 0;

    ctx.beginPath();
    ctx.fillStyle = "#341aff";
    ctx.fillRect(0,0, 1875, 700);
    ctx.shadowBlur = 0;

    ctx.beginPath();
    var grd= ctx.createLinearGradient(0, 0, 0, 350);
    grd.addColorStop(1,"white");
    grd.addColorStop(0,"#492eff");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 1875, 400);
    ctx.shadowBlur = 0;


}







function drawCircles()
{
    var ctx= document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.shadowColor ="#fffe04";
    ctx.shadowBlur = 65;
    ctx.fillStyle = "#fffe03";
    ctx.arc(0,0,200,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();


}



var pic1 = new Image(); // new image sets 'pic 1' as an Image Object
pic1.src = "img/surfer-png-6.png";

var pic2 = new Image();
pic2.src ="http://worldartsme.com/images/beach-ball-clipart-1.jpg";




noseX = "";
noseY = "";

leftWristX = "";
rightWristX = "";

distance = "";

function setup()
{
    canvas = createCanvas(550,500);
    canvas.position(600,130);
    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("lightblue");
    textSize(distance);
    stroke("#c4ff4d");
    text("RADHIKA",noseX,noseY);
}
function modelloaded()
{
    console.log("Pose Net Is Initialised");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y
        console.log("Nose X = "+noseX);
        console.log("Nose Y = "+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("Left Wrist X = "+leftWristX);
        console.log("Right Wrist X = "+rightWristX);
        distance = floor(leftWristX-rightWristX);
        document.getElementById("fontSize").innerHTML = "Font size = "+distance+"px";
    }
}
noseX=0;
noseY=0;

difference=0;

rightWristX=0;
leftWristX=0;

function preload(){

}

function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,500);
canvas.position(700,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("Pose Net is initialized");
}

function draw(){
background('#0069d1');
fill('#09ff00');
stroke('#000000');
square(noseX, noseY, difference);
document.getElementById("square_sides").innerHTML="The width and height of the square is: "+difference+"px.";
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        console.log("noseX= "+noseX+", noseY= "+noseY);

        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;

        difference=floor(leftWristX-rightWristX);

        console.log("Left Wrist X= "+leftWristX+", Right Wrist X= "+rightWristX+", Difference= "+difference);
    }
}
function x(){
window.alert("The name of the application is font manipulator as It manipulates the size of the font.");
}
function preload(){
}
function setup(){
video = createCapture(VIDEO);
video.size(600, 1050);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
video.position(0,-170);
canvas = createCanvas(668,450);
canvas.position(600, 130);
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
}
}
function draw(){
background('orange');
}
function modelLoaded(){
console.log("Posenet is initialised");
}
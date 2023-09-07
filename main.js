nosex=0;
nosey=0;

function preload(){
    clown=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
    
}

function modelloaded(){
    console.log("posenet works");
    
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-15;
        console.log("nosex ="+nosex);
        nosey=results[0].pose.nose.y-15;
        console.log("nosey ="+nosey);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(clown,nosex,nosey,35,35);
}

function takesnap(){
    save("donut.png")
}
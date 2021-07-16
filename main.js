function preload() {
}

function setup() {
    canvas = createcanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save('SaatvikFilterapp.png');
}

function modelLoaded() {
    console.log('poseNet is Initialized');
}

function gotPoses() {
    if (results.length > 0) {
        console.log(results);
        console.log("rightEye x = " + results[0].pose.rightEye.x);
        console.log("rightEye y = " + results[0].pose.rightEye.y);
        console.log("leftEye x = " + results[0].pose.leftEye.x);
        console.log("leftEye y = " + results[0].pose.leftEye.y);
    }
}
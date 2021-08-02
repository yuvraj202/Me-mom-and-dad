Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_qulity: 90
});

camera = document.getElementById("camera");

Webcam.attach("camera");



function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });

}
console.log("ml5.version", ml5.version);
//   https://teachablemachine.withgoogle.com/models/Bb8Jf7KvR/    //

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Bb8Jf7KvR/model.json', modelLoaded);


function modelLoaded() {

    console.log("Model Loaded!");

}

function identify_image() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {

    if (error) {

        console.log(error);
    } else {

        console.log(results);
        document.getElementById("result_object").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }

}

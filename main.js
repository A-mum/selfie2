var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function Start(){
    document.getElementById("text_box").innerHTML = "";

    recognition.start();
}

recognition.onresult = function run (event) {

console.log(event);

var Content = event.results[0][0].transcript;

console.log(Content);
 
document.getElementById("text_box").innerHTML = Content;
speak();
}


Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera")


function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("text_box").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach("#camera");
}
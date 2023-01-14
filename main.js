
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
    }) ;
    cam=document.getElementById("camera");
    Webcam.attach(cam);
    
    function picture(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">';
    });    
    }
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3YU3A2UuG/model.json",modelloaded);
    
    function modelloaded(){
    console.log("model is loaded");
    }
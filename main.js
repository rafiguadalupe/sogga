Webcam.set({
    width:370,
    height:300,
    image_format: "png",png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">';
    });
}




















































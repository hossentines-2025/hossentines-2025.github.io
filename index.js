noButton = document.getElementById("NoButton");
yesButton = document.getElementById("YesButton");
introGIF = document.getElementById("intro_gif");
var noCount = 0;

function noClick () {

    introGIF.remove()
    document.getElementById("question").innerHTML = "Please? 😔"
    var img = document.createElement('img');
    img.src = "Images/Spongebob_sad.JPG";
    document.getElementById("response_image").appendChild(img);
    img.width = 300; // Example width
    img.height = auto;

}


function yesClick () {

    introGIF.remove()
    var img = document.createElement('img');
    img.src = "cat_kiss.gif";
    document.getElementById("question").innerHTML = "Hooray! 😁 #real"
    yesButton.remove();
    noButton.remove();

    document.getElementById("response_image").innerHTML = "";
    //remove when done
    sample = document.getElementById("example");
    //sample.innerHTML = "Insert finished art here :3"
    
    sample.appendChild(img);
    img.width = 400; // Example width
    img.height = auto;

}





noButton.addEventListener('click', noClick);
yesButton.addEventListener('click', yesClick);
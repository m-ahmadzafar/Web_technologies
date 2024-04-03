$(document).ready(function() {
   

    var srcPrinter = document.querySelector("#srcPrinter")

    //first we get all the images
    var mainImg = document.querySelector("#mainImg");


    var logo = document.querySelector("#logo");
 

    var card1 = document.querySelector("#img1")
    var card2 = document.querySelector("#img2")
    var card3 = document.querySelector("#img3")
    
    mainImg.addEventListener("click", function(){
        srcPrinter.innerText = mainImg.getAttribute("src");
    });
    card1.addEventListener("click", function(){
        srcPrinter.innerText = card1.getAttribute("src");
    });
    card2.addEventListener("click", function(){
        srcPrinter.innerText = card2.getAttribute("src");
    });
    card3.addEventListener("click", function(){
        srcPrinter.innerText = card3.getAttribute("src");
    });
    
    

});
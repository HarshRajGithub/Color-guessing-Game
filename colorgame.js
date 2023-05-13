var numsquares = 6;
var colors = generaterandomcolors(numsquares);
var squares = document.querySelectorAll(".squares");
var pickedcolor = pickcolor(); 
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybutton = document.querySelector("#easybutton");
var hardbutton = document.querySelector("#hardbutton");
easybutton.addEventListener("click", function(){
    hardbutton.classList.remove("selected");
    easybutton.classList.add("selected");
    numsquares = 3;
    colors = generaterandomcolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
})
hardbutton.addEventListener("click", function(){
    easybutton.classList.remove("selected");
    hardbutton.classList.add("selected"); 
    numsquares = 6;
    colors = generaterandomcolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i=0; i<squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    } 
})
resetbutton.addEventListener("click",function(){
    colors = generaterandomcolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    this.textContent = "New Colors";
    messagedisplay.textcontent = "";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#182401";
})
colordisplay.textContent = pickedcolor;

for(var i = 0; i<squares.length; i++){
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click",function(){
        
        var clickedcolor = this.style.background;
        if(clickedcolor === pickedcolor){
            messagedisplay.textContent = "correct";
            resetbutton.textContent = "Play Again";
            changecolors(pickedcolor);
            h1.style.background =clickedcolor;
        }else{
             this.style.background = "#182401";
             messagedisplay.textcontent = "Try Again";
            }
    
    });   
}
function changecolors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
}
function pickcolor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generaterandomcolors(num){
    var arr = []
    for(var i=0; i < num; i++){
        arr.push(randomcolor())

    }
    return arr;
}
function randomcolor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
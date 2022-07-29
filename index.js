var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userPattern=[];
var level=0;
var started=false;
$(document).on("keypress",function(event){
    if(!started){
        started=true;
        nextSequence();
    }
    
});


$(".btn").on("click",function(){

  
    userPattern.push($(this).attr("id"));
    playSound($(this).attr("id"));
    animateButton($(this));
    checkAnswer(userPattern.length-1);
   
});

function checkAnswer(position){
    if(gamePattern[position]===userPattern[position]){
        if(gamePattern.length===userPattern.length){
            nextSequence();
        }
    }
    else{
        level=0;
        started=false;
        gamePattern=[];
        userPattern=[];
        gameOver();
    }
}



function playSound(key){
    var audio=new Audio("sounds/"+key+".mp3");
    audio.play();
}


function nextSequence(){
    userPattern=[];
    level++;
    $("h1").text("Level "+level);
   var randomNumber=Math.floor(Math.random()*4);
   var randomChoosenColor=buttonColors[randomNumber];
 
   gamePattern.push(randomChoosenColor);
   
   playSound(randomChoosenColor);
   $("#"+randomChoosenColor).fadeOut(100).fadeIn(100);
    
}

function animateButton(key){
    $(key).addClass("pressed");
    setTimeout(function(){
        $(key).removeClass("pressed");//CANNOT USE THIS KEY WORD HERE INSIDE
     }, 110);
}

       
 
    
function gameOver(){
    $("h1").text("Game Over, Press any key to restart");
   
    $("body").addClass("game-over");
    
    setTimeout(function(){
        $("body").removeClass("game-over"); 
    },100);
    
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();

}
 



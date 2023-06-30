var player1  = Math.floor((Math.random()*6)+1);
var name ="dice"+player1+".png";
console.log(name);

document.querySelector(".img1").setAttribute("src","./images/"+name);
var player2  = Math.floor((Math.random()*6)+1);
var name ="dice"+player2+".png";
document.querySelector(".img2").setAttribute("src","./images/"+name);


if(player1 > player2){
     name = " Player 1 wins!";
}else if(player2 > player1){
     name = " Player 2 wins!";
}else{
    name="Game Draw! Try again";
}

document.querySelector("h1").innerHTML=name;
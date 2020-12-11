var randomNumber1=Math.floor(Math.random()*6)+1;
var image1="dice"+randomNumber1+".png";
var randomImage1="images/"+image1;
var res1=document.querySelectorAll("img")[0];
res1.setAttribute("src",randomImage1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var image2="dice"+randomNumber2+".png";
var randomImage2="images/"+image2;
var res2=document.querySelectorAll("img")[1];
res2.setAttribute("src",randomImage2);
if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="Player 1 Wins";
else if(randomNumber2>randomNumber1)
document.querySelector("h1").innerHTML="Player 2 Wins";
else
document.querySelector("h1").innerHTML="It is a draw";                                                                                                                                                                                                                                                                                                                                                                                                                                 
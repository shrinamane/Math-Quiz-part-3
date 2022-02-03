player1name= localStorage.getItem("Player1Name")
player2name= localStorage.getItem("Player2Name")
player1score=0
player2score=0
document.getElementById("player1name").innerHTML=player1name
document.getElementById("player2name").innerHTML=player2name
document.getElementById("player1score").innerHTML=player1score
document.getElementById("player2score").innerHTML=player2score
document.getElementById("playerquestion").innerHTML="questionturn="+player1name
document.getElementById("playeranswer").innerHTML="answerturn="+player2name
function send(){
    num1=document.getElementById("number1").value
    num2=document.getElementById("number2").value
    questionword="<h4>" + num1 + " X "+ num2 +"</h4>"
    inputbox="<br> ANSWER: <input id='answer'>"
    button="<br> <br> <button class='btn btn-info' onclick='check()'>Check </button>"
row=questionword+inputbox+button 
document.getElementById("output").innerHTML=row
}
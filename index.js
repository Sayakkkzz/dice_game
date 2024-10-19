
var n1=prompt("Enter Player 1 name ");
document.getElementById("player1").textContent=n1;
document.getElementById("name_tag1").textContent=n1;
var n2=prompt("Enter Player 2 name");
document.getElementById("player2").textContent=n2;
document.getElementById("name_tag2").textContent=n2;


document.getElementById("btn").onclick = function() { play(n1,n2) };




function play(name1,name2) {
    var d1 = Math.floor(Math.random() * 6) + 1; 
    var d2 = Math.floor(Math.random() * 6) + 1; 

    var randomImage1 = "dice" + d1 + ".png";
    var randomImage1source = "./" + randomImage1;
    var randomImage2 = "dice" + d2 + ".png";
    var randomImage2source = "./" + randomImage2;

    document.querySelectorAll("img")[0].setAttribute("src", randomImage1source);
    document.querySelectorAll("img")[1].setAttribute("src", randomImage2source);
    document.getElementById("btn").innerHTML="Play Again";


    if(d1>d2){
        document.getElementById("Winner").textContent=name1+" Won";
    }
    else if(d2>d1){
        document.getElementById("Winner").textContent=name2+" Won";
    }
    else if(d1==d2){
        document.getElementById("Winner").textContent="Draw";
    }
}


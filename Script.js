"use strict";

function game(){
    if(confirm("Perla is the tallest in the class")){
        alert("incorrect!!!!! your stupid");
    } else {
        alert("Correct!!! You are smart enough<3");

    }
    if(confirm("I've been in 4 sports")){
        alert("correct!!! You are smart enough<3");
    } else {
        alert("incorrect!!!!! your stupid");

    }
    if(confirm("I love food")){
        alert("correct!!! You are smart enough<3");
    } else {
        alert("incorrect!!!!! your stupid");

    }

    //5 questions
    if(prompt("Do you think drink coffee?") === "yes" .toLowerCase || "y".toLowerCase){    
        console.log("Question one response is yes");
    }
    if(prompt("Do you have like spicy food?") === "yes" .toLowerCase || "y".toLowerCase){    
        console.log("Question two response is yes");
    }
    if(prompt("Do you have a crush on a celebrity or ficitonal/animated character??") === "yes" .toLowerCase || "y".toLowerCase){    
        console.log("Question third response is yes");
    }
    if(prompt("Do you have a dad/father figure?") === "yes" .toLowerCase || "y".toLowerCase){    
        console.log("Question four response is yes");
    }
    if(prompt("Are you shorter than Perla Mendoza?") === "yes" .toLowerCase || "y".toLowerCase){    
        console.log("Question five response is yes");
    }
}

function gettoknowyou(){
    let username = prompt("what is your name?")
    alert("HIIIII Stranger " + username + " welcome to my site");
    alert(username + `, Stranger Danger. I don't know you but you are gonna enjoy my webiste!!! `);
}
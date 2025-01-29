'use strict';

document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault(); 
    let emailAddress = document.getElementById("email").value;
    const confirmation = document.querySelector(".success");
    if (confirmation.style.display === "none") {
        confirmation.style.display = "flex";
        document.getElementById("email2").innerHTML = emailAddress;
        document.querySelector(".container").style.backgroundColor = "hsl(234, 29%, 20%)";
        document.querySelector(".first").style.display = "none";
        document.querySelector(".second").style.display = "none"; 
    }
});
    
document.querySelector(".dismiss-btn").addEventListener("click", function(){
    document.querySelector(".success").style.display = "none";
    document.querySelector(".container").style.backgroundColor = "hsl(0 , 0%, 100%)";
    document.querySelector(".first").style.display = "flex";
    document.querySelector(".second").style.display = "flex";   
});



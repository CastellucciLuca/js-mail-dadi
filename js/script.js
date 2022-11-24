//DADI---
//Definizione Variabili
const gameStart = document.getElementById("game-start")

let playerNumberElement;

let uiNumberElement;

//Game Start
gameStart.addEventListener ("click", function() {
    playerNumberElement = Math.floor(Math.random() * 6) + 1;
    uiNumberElement = Math.floor(Math.random() * 6) + 1; 

    document.getElementById("user-number").innerHTML = `Il tuo tiro: ${playerNumberElement}`;
    document.getElementById("ui-number").innerHTML = `Il computer ha tirato: ${uiNumberElement}`;

    if (playerNumberElement > uiNumberElement) {
        document.getElementById("result").innerHTML = "You win!";
    } else if ((playerNumberElement < uiNumberElement)) {
        document.getElementById("result").innerHTML = "You loose!";
    } else if (playerNumberElement == uiNumberElement) {
        document.getElementById("result").innerHTML = "Draw!";
    }
});
//EMAIL---
//Definizione Array EMAIL
const emailList = [
    "luigi098@gmail.com",
    "gigio08@gmail.com",
    "luigia098@gmail.com",
    "castelluccilu98@gmail.com",
    "morgana@gmail.com",
    "leopoldi@gmail.com",
    "roberto@gmail.com",
    "bolean234@gmail.com",
    "booleano@gmail.com",
    "master984@gmail.com",
    "oro@gmail.com",
    "platin@gmail.com",
    "diamatti@gmail.com",
    "orione@gmail.com",
];
//Definizione Variabili
let userEmail;

const sendEmail = document.getElementById("invia");



sendEmail.addEventListener ("click", function() {
    userEmail = document.getElementById("user-email").value;

    let emailSent = false;
    //CONTROLLO TRA TUTTE LE EMAIL SE LA MIA è PRESENTE (emailList)
    for (let i = 0 ; i < emailList.length; i++){
    
    
    if (userEmail == emailList[i]){
        emailSent = true;
    }
    }
    
    if (emailSent){
        alert("Email inviata con successo!");
    } else{
        alert("Email non presente nei registri!");
    }

});
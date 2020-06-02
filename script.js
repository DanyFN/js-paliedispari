//PAROLA PALINDROMA SENZA FUNZIONE

var parola = prompt("inserisci la parola");
console.log("la parola inserita è " + parola);
var palindroma = parola.split('').reverse().join('');
console.log("la parola al contrario è " + palindroma);

if (parola == palindroma) {
  console.log("la parola è palindroma");
}else{
  console.log("la parola NON è palindroma");
}

// CON FUNZIONE 1

var parola = prompt("inserisci una parola");
console.log("parola iniziale: " + parola);
var parolaVerifica = parolaPalindroma(parola);

function parolaPalindroma(str){

  var parolaInvertita = str.split('').reverse().join('');
  console.log("parola invertita: " + parolaInvertita);

  if (str == parolaInvertita) {
    console.log("la parola è palindroma");
  }else{
    console.log("la parola NON è palindroma");
  }

};

// CON FUNZIONE 2

function parolaPalindroma(){

  var parola = prompt("inserisci una parola");
  console.log("parola iniziale: " + parola);
  var parolaInvertita = parola.split('').reverse().join('');
  console.log("parola invertita: " + parolaInvertita);

  if (parola == parolaInvertita) {
    console.log("la parola è palindroma");
  }else{
    console.log("la parola NON è palindroma");
  }
};

parolaPalindroma();


//ESERCIZIO 2

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// FUNZIONE 1
function pariDispari(sceltaParidispari,numero) {
  var utenteScelta = prompt("scegli pari o dispari");
  console.log("l'utente sceglie " + utenteScelta);

  while ( !(utenteScelta =="pari") && !(utenteScelta=="dispari" ) ) {
    var utenteScelta = prompt("ERRORE,scegli pari o dispari");
    console.log("l'utente sceglie " + utenteScelta);
  }

  var utenteNumero = parseInt( prompt("scegli un numero da 1 a 5") );
  console.log("il numero scelto dall'utente è " + utenteNumero);

  while ( isNaN(utenteNumero) || (utenteNumero > 5 ) || ( utenteNumero <= 0) ) {
    var utenteNumero = parseInt( prompt("ERRORE,scegli un numero da 1 a 5") );
    console.log("il numero scelto dall'utente è " + utenteNumero);

  }

  var cpu = Math.floor((Math.random() * 5) + 1);
  console.log("il computer sceglie " + cpu);

  var somma = utenteNumero + cpu;
  console.log("la somma totale è " + somma);

  if (utenteScelta == "pari" && somma % 2==0) {
    document.writeln("<h3>" + "hai scelto " + utenteScelta + "," + "il numero che hai scelto è " + utenteNumero +"," + "il computer ha scelto "
    + cpu + ", la somma è " + somma +", " + "HAI VINTO" + "</h3>");
  }else if (utenteScelta == "dispari" && somma % 2==1) {
    document.writeln("<h3>"+ "hai scelto " + utenteScelta + ","  + "il numero che hai scelto è " + utenteNumero + "," + "il computer ha scelto "
    + cpu + ", la somma è " + somma + ", " + "HAI VINTO" + "</h3>");
  }else if(utenteScelta == "pari" && somma % 2==1){
    document.writeln("<h3>" + "hai scelto " + utenteScelta + "," + "il numero che hai scelto è " + utenteNumero + "," + "il computer ha scelto "
    + cpu + ", la somma è " + somma +", " + "VINCE IL COMPUTER" + "</h3>");
  }else if (utenteScelta == "dispari" && somma % 2==0) {
    document.writeln("<h3>" + "hai scelto " + utenteScelta + "," + "il numero che hai scelto è " + utenteNumero + "," + "il computer ha scelto "
    + cpu + ", la somma è " + somma +", " + "VINCE IL COMPUTER" + "</h3>");
  }
};
pariDispari();


// FUNZIONE 2

//par 1
var utenteScelta = prompt("scegli pari o dispari");
//par 2
var utenteNumero = parseInt( prompt("scegli un numero da 1 a 5") );
​
// struttura funzione con parametri "standard,all'intenro della funzione"
function pariDispari(scelta, numero) {
  while ( !(scelta =="pari") && !(scelta=="dispari" ) ) {
    var scelta = prompt("ERRORE,scegli pari o dispari");
  }
  while ( isNaN(numero) || (numero > 5 ) || ( numero <= 0) ) {
    var numero = parseInt( prompt("ERRORE,scegli un numero da 1 a 5") );
  }
  var cpu = Math.floor((Math.random() * 5) + 1);
  var somma = numero + cpu;

  if (scelta == "pari" && somma % 2==0) {
    document.writeln("<h3>" + "hai scelto " + scelta + "," + "il numero che hai scelto è " + numero +"," + "il computer ha scelto "
    + cpu + ", la somma è " + somma +", " + "HAI VINTO" + "</h3>");
  }else if (scelta == "dispari" && somma % 2==1) {
    document.writeln("<h3>"+ "hai scelto " + scelta + ","  + "il numero che hai scelto è " + numero + "," + "il computer ha scelto "
    + cpu + ", la somma è " + somma + ", " + "HAI VINTO" + "</h3>");
  }else if(scelta == "pari" && somma % 2==1){
    document.writeln("<h3>" + "hai scelto " + scelta + "," + "il numero che hai scelto è " + numero + "," + "il computer ha scelto "
    + cpu + ", la somma è " + somma +", " + "VINCE IL COMPUTER" + "</h3>");
  }else if (scelta == "dispari" && somma % 2==0) {
    document.writeln("<h3>" + "hai scelto " + scelta + "," + "il numero che hai scelto è " + numero + "," + "il computer ha scelto "
    + cpu + ", la somma è " + somma +", " + "VINCE IL COMPUTER" + "</h3>");
  }
};
​
// funzione con parametri reali
pariDispari(utenteScelta, utenteNumero);

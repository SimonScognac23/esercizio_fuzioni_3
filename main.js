

// Chiediamo all'utente di inserire un numero
let numeroInserito = Number(prompt("Inserisci un numero (massimo 9999):"));

// Verifica che l'input sia un numero valido
if (isNaN(numeroInserito) || numeroInserito <= 0) {
    alert("Non vale, riprova");
} else {
    // Chiama la funzione con il numero inserito dall'utente
    contaCifre(numeroInserito);
}


function contaCifre(numero) {
    // Controlla se il numero è maggiore di 9999
    if (numero > 9999) {
        console.log("Numero troppo grande");
        return;
    }

    // Converto il numero in stringa per contarne la lunghezza
    let numeroStr = numero.toString();

    // Restituisci il numero di cifre 
    console.log("il numero delle cifre sono: " + numeroStr.length);


}





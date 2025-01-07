
Il programma inizia chiedendo all'utente di inserire un numero tramite una finestra di dialogo (prompt()). Il valore inserito viene poi convertito in un numero con Number().
Controllo dell'input:

Una volta che l'utente ha inserito il numero, il programma verifica se l'input è valido. Se l'utente non inserisce un numero o inserisce un valore negativo, il programma mostra un messaggio di errore e chiede di riprovare.
Funzione per contare le cifre (contaCifre):

Se l'input è valido, viene chiamata la funzione contaCifre(), che si occupa di calcolare il numero di cifre del numero inserito.
All'interno della funzione:
Prima si verifica se il numero è maggiore di 9999. Se lo è, viene mostrato un messaggio che avvisa l'utente che il numero è troppo grande.
Se il numero è valido, lo si converte in una stringa per poter contare facilmente il numero di cifre utilizzando la proprietà length.
Infine, viene stampato il numero di cifre del numero nel console log.
Scopo dell'esercizio:
Questo esercizio è pensato per esercitarsi con la gestione dell'input utente, la validazione dei dati, e l'uso di funzioni in JavaScript. Inoltre, offre un'opportunità per lavorare con la conversione dei tipi di dati e le strutture condizionali in modo semplice ed efficace.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The program starts by asking the user to enter a number through a dialog box (prompt()). The entered value is then converted into a number using Number().

Input Validation:

Once the user has entered the number, the program checks if the input is valid. If the user does not enter a number or inputs a negative value, the program displays an error message and asks the user to try again.

Function to Count the Digits (contaCifre):

If the input is valid, the contaCifre() function is called to calculate the number of digits in the entered number. Inside the function:

First, it checks if the number is greater than 9999. If it is, a message is displayed to inform the user that the number is too large.
If the number is valid, it is converted to a string to easily count the number of digits using the length property.
Finally, the number of digits of the entered number is printed in the console log.
Purpose of the Exercise: This exercise is designed to practice handling user input, validating data, and using functions in JavaScript. Additionally, it provides an opportunity to work with data type conversion and conditional structures in a simple and effective way

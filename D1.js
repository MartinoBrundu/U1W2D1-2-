/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
stringhe : concatenazione di caratteri --> accetta valori alfanumerici 
numerici : valori numeri interi, decimali --> accetta valore numerici ad esempio l'età e qualunque altro valore da 0 all'infinito
booleani : veridicità true/false --> verifica se le operazione sono vere o false
undefined : il valore di una variabile definita ma senza assegnazione --> quando si crea una variabile ma senza assegnarla 
null : null è un valore, rappresenta l'ESPLICITA ASSENZA di un valore --> lo stesso valore applicato è inesistente però allo stesso
tempo valido

*/


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = 'Martino'
console.log('il mio nome' , myName)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let sum = (12 + 20 )
console.log ("la somma di sum è " , sum)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = ( 12 )
console.log ('il valore di x è' , x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Brundu'
console.log ('il nuovo valore di myName è il mio cognome' , myName)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let result = ( 4 - x )
console.log ('il risultato della sottrazione tra 4 e x è' , result)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'
let result2 = name1!==name2
console.log ( result2 )


// extra










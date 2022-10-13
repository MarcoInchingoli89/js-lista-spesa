/* Consegna */

/* Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice. */

// Creo un array con la mia lista della spesa
const shoppingList = [
    'Pane',
    'Latte di mandorla',
    'Insalata',
    'Burger di soia'
];

// Imposto le variabili i e text
// Dentro text andrò ad inserire gli elementi dall'array

let i = 0;
let text = '';

// Seleziono la mia ul per la stampa della lista della spesa su pagina
const shoppingListElement = document.querySelector('.shopping-list')
console.log(shoppingListElement);

// Creo il mio ciclo While
while (shoppingList[i]) {
    text += shoppingList[i] + "<br>";
    i++;
    // Imposto il mio li con dentro la lista della spesa da inserire nel mio ul
    const liElement = `<li>${text}</li>`
    // Stampo la lista nel mio li su pagina
    shoppingListElement.insertAdjacentHTML('beforeend', liElement)

}

// Stampo su console
console.log(text);
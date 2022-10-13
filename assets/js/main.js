/* Consegna */

/* Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice. */

// Creo un array con la mia lista della spesa
const shoppingList = [
    'Pane',
    'Latte di mandorla',
    'Insalata',
    'Burger di soia',
];

// Ciclo While
let i = 0;
while (i < shoppingList.length) {
    // Imposto il mio indice in una costante
    const shoppingListElement = shoppingList[i]
    console.log(shoppingListElement);
    //Seleziono il mio ul
    const ul = document.querySelector('ul')
    //Creo un li
    const liElement = document.createElement("li")
    //Uso append per inserire li in ul
    ul.append(liElement)
    //Dentro li inserisco la mia lista della spesa
    liElement.append(shoppingListElement)
    i++
}
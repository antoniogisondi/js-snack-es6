PROBLEMA:
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal

SOLUZIONE:
1- Creo un array di oggetti con il nome di biciclette e i loro relativo peso;
2- Creo un ciclo forEach per ciclare gli oggetti dell'array;
3- Dentro il forEach creo una condizione:
    SE il peso della bici è minore del valore dalla variabile bici_piu_leggera allora quest'ultima è uguale al parametro della funzione di forEach
4- Così esce il, stampando il template literal il nome e il peso della bici più leggera
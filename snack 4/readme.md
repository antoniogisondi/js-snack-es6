PROBLEMA:
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

SOLUZIONE:
1- Creo un array vuoto dove andremo a in seguito pushare le chiavi degli oggetti che ci interessano;
2- Creo un ciclo forEach dove andrò a cambiare il valore delle chiavi punti_fatti e falli_subiti;
3- Con la funzione Math.random vado a cambiare il valore delle chiavi punti_fatti e falli_subiti;
4- Creo una variabile oggetto dove andrò a mettere la chiave nome e falli_subiti
5- Pusho la variabile oggetto nell'array vuoto
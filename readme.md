PROBLEMA: Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

SOLUZIONE:
1- Chiedo all'utente quanti km deve percorrere dichiarando una variabile con la proprietà prompt;
2- Chiedo all'utente quanl'è la sua età dichiarando una variabile con la proprietà prompt;
3- Dichiaro la variabile costante del prezzo al km;
4- Dichiaro una variabile concatenata da un prodotto tra il prezzo al km e i km scelti dall'utente;
5- Dichiaro una variabile concatenata in cui verrà calcolato lo sconto per gli utenti under 18; 
6- Dichiaro una variabile concatenata in cui verrà calcolato lo sconto per gli utenti over 65;
7- Apriamo la condizione:
    SE
    7.1- L'utente ha un'età minore di 18 anni il prezzo sarà scontato del 20%;

    ALTRIMENTI SE:
    7.2- L'utente ha un'età maggiore di 65 anni il prezzo sarà scontato del 40%;

    ALTRIMENTI:
    7.3- Gli verrà applicato il prezzo regolare del biglietto;
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


let age = parseInt(prompt("Qual'è la tua età?"))

let km = parseInt(prompt("Quanti km vorresti percorrere?"))

let priceKm = 0.21;

let price = (km * priceKm)

let discountPrice

let message


if (age <= 18){
    discountPrice = (price * 0.8).toFixed(2)
    message = 'Il prezzo del biglietto scontato per i minori di 18 anni è di:' + discountPrice

} 
else if (age >= 65){
    discountPrice = (price * 0.6).toFixed(2)
    message = 'Il prezzo del biglietto scontato per gli over 65 anni è di:' + discountPrice
}
else{
    price
    message = 'Il prezzo del biglietto regular è di:' + price.toFixed(2)
}

document.getElementById("ticket").innerHTML = message
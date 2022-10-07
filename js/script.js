// prendo bottone calcola
const btnCalc = document.getElementById('btn-calcola');
// funzione per calcolo prezzo con o senza sconto + arrotondamento + stampa in dom
const ticketPrice = function(){
    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;
    let priceForNumbKm = 0.21 * km;
        if(age < 18){
            priceForNumbKm = priceForNumbKm * 0.80;
        } else if(age > 65){
            priceForNumbKm = priceForNumbKm * 0.60;
        } else {
            priceForNumbKm = priceForNumbKm;
        }
        console.log(priceForNumbKm);
        document.getElementById("ticket-price").innerHTML = 'Ecco il costo del tuo ticket: ' + priceForNumbKm.toFixed(2) + ' &euro;';
        event.preventDefault();
}
// on click
btnCalc.addEventListener('click', ticketPrice);
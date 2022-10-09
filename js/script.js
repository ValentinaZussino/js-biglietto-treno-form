// prendo bottone calcola
const btnCalc = document.getElementById('btn-calcola');
// funzione per calcolo prezzo con o senza sconto + arrotondamento + stampa in pagina
const ticketPrice = function(){
    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;
    let priceForNumbKm = 0.21 * km;
        if(age < 18){
            priceForNumbKm = priceForNumbKm * 0.80;
            document.getElementById("discount-applied").innerHTML = 'Lo sconto a te applicato &egrave; del 20&percnt;'
        } else if(age > 65){
            priceForNumbKm = priceForNumbKm * 0.60;
            document.getElementById("discount-applied").innerHTML = 'Lo sconto a te applicato &egrave; del 40&percnt;'
        } else {
            priceForNumbKm = priceForNumbKm;
            document.getElementById("discount-applied").innerHTML = 'Nessuna scontistica prevista'
        }
        console.log(priceForNumbKm);
        document.getElementById("ticket-price").innerHTML = priceForNumbKm.toFixed(2) + ' &euro;';
        event.preventDefault();
}
// on click
btnCalc.addEventListener('click', ticketPrice);

const btnCalc = document.getElementById('btn-calcola');
const km = document.getElementById('km').value;
const age = document.getElementById('age').value;
let priceForNumbKm = 0.21 * km;
console.log(km, age, priceForNumbKm)

const ticketPrice = function(){
        if(age < 18){
            priceForNumbKm = priceForNumbKm * 0.80;
        } else if(age > 65){
            priceForNumbKm = priceForNumbKm * 0.60;
        } else {
            priceForNumbKm = priceForNumbKm;
        }
        console.log(priceForNumbKm)
}

btnCalc.addEventListener('click', ticketPrice);

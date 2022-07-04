const TD_KM = document.getElementById('km-viaggio');
const TD_PREZZO = document.getElementById('prezzo-base');
const TD_SCONTO = document.getElementById('sconto-viaggio');
const TD_TOTALE = document.getElementById('totale');


let age = parseInt(prompt('quanti anni hai?'));
let kmViaggio = parseFloat(prompt('quanti km vuoi percorrere'));

const COSTO_KM = 0.21;

let costoBiglietto = kmViaggio * COSTO_KM;
TD_PREZZO.innerHTML = costoBiglietto.toFixed(2) + '€'
console.log(costoBiglietto);

let sconto = 0;

const SCONTO_GIOVANI = 0.2;
const SCONTO_ANZIANI = 0.4;

if (isNaN(age) || isNaN(kmViaggio)) {
    console.log('INSERIRE UN NUMERO')
} else {
    if (age < 18) {
        sconto = costoBiglietto * SCONTO_GIOVANI
        costoBiglietto -= sconto
    } else if (age > 65) {
        sconto = costoBiglietto * SCONTO_ANZIANI
        costoBiglietto -= sconto
    }
    // console.log(prompt(`il costo del tuo bigletto è ${costoBiglietto}€, è stato applicato uno sconto pari a ${sconto}€`))

    TD_KM.innerHTML = kmViaggio
    TD_SCONTO.innerHTML = sconto.toFixed(2) + '€'
    TD_TOTALE.innerHTML = costoBiglietto.toFixed(2) + '€'
}



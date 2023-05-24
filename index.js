const inputDia = document.querySelector('#dia');
const inputMes = document.querySelector('#mes');
const inputYear = document.querySelector('#year');
const iconArrow = document.querySelector('#icon-arrow-svg');
const divResultado = document.querySelector('.resultado');

// cuando cargue la pesta;a muestr los options
window.addEventListener('load', () => {
    mostrarOptions()
})

// funcion para hacer la opercion para sacar los years
const obtenerEdad = () => {
    let fecha = new Date();
    
    // variables de la fecha actual (dia, mes, year)
    const diaActual = fecha.getDate();
    const mesActual = Number(fecha.toLocaleString('es', { month: 'numeric' }));
    const yearActual = fecha.getFullYear();
    
    // resta de las fechas
    let diaTotal = diaActual - inputDia.value;
    let mesTotal =  mesActual - inputMes.value;
    let yearTotal =  yearActual - inputYear.value;
    
    // verificacion de fechas negativos
    // si una fecha es menor a cero se le suman 30 si es el y se le resta uno al mes.
    // si el mes es menor a cero se le suma 12 y se le resta uno al year
    // la ultima obliga a que el year si es menor a cero siempre sea cero
    if (diaTotal < 0) {
        diaTotal += 30;
        mesTotal -= 1;
        
    }if (mesTotal < 0) {
        mesTotal += 12;
        yearTotal -= 1;

    }if (yearTotal < 0) {
        yearTotal = 0
    }
   
    // mostrar las fechas en el DOM
    mostrarFecha(diaTotal, mesTotal, yearTotal)
}

// muestra la operacion de obtenerEdad()
iconArrow.addEventListener('click', () => {
    obtenerEdad()
});

// crea la edad para mostrar al DOM
function mostrarFecha(dia, mes, year) {
    divResultado.innerHTML = `
    <h1> <span>${year}</span> Años </h1>
    <h1> <span>${mes}</span> Meses </h1>
    <h1> <span>${dia}</span> Días </h1>
    `
}

// crea los opcions de los selects
function mostrarOptions() {
    // options de dia de nacimiento
    let limiteDias = 31;
    for (let dias = 1; dias <= limiteDias; dias++) {
        const options = document.createElement('option');
        options.textContent = dias;
        inputDia.appendChild(options)
    }

    // opcions del mes de nacimiento
    let limitesMeses = 12
    for (let meses = 1; meses <= limitesMeses; meses++) {
        const options = document.createElement('option');
        options.textContent = meses;
        inputMes.appendChild(options)
    }
 
    // options del year de nacimiento
    let year = new Date().getFullYear()
    let limiteyears = 1940;
    for (let years = year; years >= limiteyears; years --) {
        const options = document.createElement('option');
        options.textContent = years;
        inputYear.appendChild(options)
    }
}
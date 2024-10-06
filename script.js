
// Ejercicio 1
// Calcular el área de un círculo

let radio = parseFloat(prompt("Digite el valor del radio: "));
const areaCirculo = Math.PI * Math.pow(radio, 2); 
console.log("Area del circulo es: ", areaCirculo);

// Ejercicio 2
// Calcular el área de un cilindro

let radio = parseFloat(prompt("Digite el valor del cilindro: "));
let alturaCilindro = parseFloat(prompt("Digite la altura del cilindro: "));
const areaCilindro = (2 * Math.PI * radioCilindro *alturaCilindro)+(2*Math.PI*Math.pow(radioCilindro, 2)); 
console.log("El area del cilindro es: ", areaCilindro);

// Ejercicio 3
// Calcular los números Pares del 1 al 100
// Repetir una linea de codigo x cantidad de veces

for (let contador = 1; contador < 100; contador++) { // contador = i - comparacion 99 veces
    if( contador % 2 === 0){
        console.log(contador);

    }
}

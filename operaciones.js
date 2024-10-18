const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;
const ejecutaOperacion = (operacion, num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        return "Alguno de los dos parámetros enviados no es numérico.";
    } else {
        return operacion(parseInt(num1), parseInt(num2));
    }
};

module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
    ejecutaOperacion
};
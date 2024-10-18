// se importa express
const express = require("express");
// se importan mis operaciones aritméticas
const { suma, resta, multiplicacion, division, ejecutaOperacion } = require("./operaciones");

// el puerto de nuestra aplicación
const port = 3000;

// la instancia de nuestro server
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Puedes elegir una operación aritmética para ejecutar en 2 números (suma, resta, multiplicación y división)");
});

app.get("/:operacion/:num1/:num2", (req, res) => {
    const { operacion, num1, num2 } = req.params;
    let resultado;
    switch (operacion) {
        case 'suma':
            resultado = ejecutaOperacion(suma, num1, num2);
            break;
        case 'resta':
            resultado = ejecutaOperacion(resta, num1, num2);
            break;
        case 'multiplicacion':
            resultado = ejecutaOperacion(multiplicacion, num1, num2);
            break;
        case 'division':
            resultado = ejecutaOperacion(division, num1, num2);
            break;
        default:
            resultado = "Operación no permitida";
            break;
    }
    res.status(200).send(`Operación: ${operacion}, Resultado: ${resultado}`);
});

app.listen(port, () => {
    console.log(`Server listo y corriendo en http://localhost:${port}/`);
});
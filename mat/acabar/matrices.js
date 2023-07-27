function multiplicarMatrices() {
    // Obtener los valores de las matrices del usuario
    const rowsA = parseInt(document.getElementById('rowsA').value);
    const colsA = parseInt(document.getElementById('colsA').value);
    const rowsB = parseInt(document.getElementById('rowsB').value);
    const colsB = parseInt(document.getElementById('colsB').value);

    // Verificar si las matrices son multiplicables
    if (colsA !== rowsB) {
        document.getElementById('resultado').innerHTML = "Las matrices no son multiplicables.";
        return;
    }

    // Obtener los valores de las matrices ingresados por el usuario
    const matrizA = obtenerMatriz('matrizA', rowsA, colsA);
    const matrizB = obtenerMatriz('matrizB', rowsB, colsB);

    // Realizar la multiplicación de matrices
    const resultado = [];
    for (let i = 0; i < rowsA; i++) {
        resultado[i] = [];
        for (let j = 0; j < colsB; j++) {
            let suma = 0;
            for (let k = 0; k < colsA; k++) {
                suma += matrizA[i][k] * matrizB[k][j];
            }
            resultado[i][j] = suma;
        }
    }

    // Mostrar el resultado en el HTML
    let resultadoHTML = "<table>";
    for (let i = 0; i < rowsA; i++) {
        resultadoHTML += "<tr>";
        for (let j = 0; j < colsB; j++) {
            resultadoHTML += `<td>${resultado[i][j]}</td>`;
        }
        resultadoHTML += "</tr>";
    }
    resultadoHTML += "</table>";

    document.getElementById('resultado').innerHTML = resultadoHTML;
}

function obtenerMatriz(id, rows, cols) {
    const matriz = [];
    const inputText = document.getElementById(id).value.split("\n");
    for (let i = 0; i < rows; i++) {
        matriz[i] = [];
        const fila = inputText[i].split(" ");
        for (let j = 0; j < cols; j++) {
            matriz[i][j] = parseInt(fila[j]);
        }
    }
    return matriz;
}
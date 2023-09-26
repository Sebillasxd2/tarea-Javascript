<script>
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1; // El factorial de 0 y 1 es 1
  } else {
    var factorial = 1;
    for (var i = 2; i <= numero; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

// Solicitar al usuario ingresar un número
var numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));

// Verificar si la entrada es un número válido
if (isNaN(numero)) {
  alert("Por favor, ingrese un número válido.");
} else if (numero < 0) {
  alert("El factorial no está definido para números negativos.");
} else {
  // Calcular el factorial utilizando la función
  var factorial = calcularFactorial(numero);

  // Mostrar el resultado
  alert("El factorial de " + numero + " es: " + factorial);
}

</script>

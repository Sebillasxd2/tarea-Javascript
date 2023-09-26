<script>
    function esPolindromo(cadena){
        cadena = cadena.replace(/\s/g,"").toLowerCase();

        var cadenaInvertida = cadena.split("").reverse().join("");

        return cadena === cadenaInvertida;
    }

    var texto = "amor";
    if (esPolindromo(texto)){
        console.log("El texto es un polindromo.");
    }else {
        console.log("El texto no es un polindromo")
    }
</script>
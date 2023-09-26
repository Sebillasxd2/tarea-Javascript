<script>
    function ParoImpar(num) {
    if (num % 2 === 0){
            return "El numero es par";
        }else
        return "El numero es impar";
    }
    var num = parseInt(prompt("Ingrese un numero"));
if(isNaN(num)){
    alert("numero ingresado invalido")
}else{
    var resultado = ParoImpar(num);
    alert(resultado);
}
</script>
<Script>
var numero1 = parseFloat(prompt("ingrese un numero:"));
var numero2 = parseFloat(prompt("ingrese otro numero:"));
var numero3 = parseFloat(prompt("ingrese un ultimo numero:"));

if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3) ){
    alert("no ingreso numeros validos repita por favor")
} else 
   if(numero1 &gt;= numero2 and numero1 &gt;= numero3 ){
    mayor = numero1
    
   }else
    if(num2 &gt;= num1 and num2 &gt;= num3){
        mayor = numero2
    }else
        mayor = numero3;
        

 if(numero1 &lt;= numero2 and numero1 &lt;= numero3 ){
    mayor = numero1
    
   }else
    if(num2 &lt;= num1 and num2 &lt;= num3){
        mayor = numero2
    }else
        mayor = numero3;

    alert("El numero mayor es: "+ mayor);
    alert("El numero menor es: "+ menor);

</Script>
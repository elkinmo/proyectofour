function recibirdatos() 

{ 

    alert("ESTA ES LA FUNCION"); 

 
 

    var nombre=(document.getElementById("boxname").value);//variable 

    console.log(nombre);//proceso matematico 

    var apellido=(document.getElementById("boxapellido").value);//variable 

    console.log(apellido);//proceso matematico 

    var gmail=(document.getElementById("boxgmail").value);//variable 

    console.log(gmail);//proceso matematico 

    var documento=(document.getElementById("boxdocumento").value);//variable 

    console.log(documento);//proceso matematico 

 
 

alert("NOMBRE COMPLETO ES " +nombre+" "+apellido);//alert 

alert("SU GMAIL Y DOCUMENTO SON " +gmail+" "+documento);//alert 

 
 

if(nombre=="elkin" && documento==1041531470) 

 
 

{ 

    alert("HOLA ELKIN ERES TU")//alert 

} 
}

function calcularcantidad()

    {
        alert("ESTA ES LA FUNCION"); 

        var tipo=(document.getElementById("cajatipo").value)



        var autor=(document.getElementById("cajaautor").value)



        var cantidad= parseInt(document.getElementById("cajacantidad").value)



         var valorlibro= parseFloat(document.getElementById("cajavalorlibro").value)
       

         var desc=0
         var pagar=0





      
        if (tipo=="A" && autor=="X" || autor=="Y" && cantidad>=1 && cantidad<=10 ){



            descuento=1500
           pagar=10000
      }
      
      
      
       if (tipo=="B" && autor=="Z" && cantidad<=5 ){
      
      
      
        descuento=1000*cantidad
        pagar=10000
        
      
      }
      
      
      
      
         if (tipo=="C" && autor=="X" && cantidad<=5 ){
      
      
      
       descuento=900*cantidad
       pagar=10000
      }
      
      
      
      
       if (tipo=="A" && autor=="Z" && cantidad<=3 ){
      
      
      
            descuento=750*cantidad
            pagar=10000
      }
      
      pagar=(cantidad*valorlibro)-(descuento*cantidad)
      
      alert("el valor a pagar  es: $" + pagar + "descuento " + descuento) 
      
      
      
      }
function calculartrabajo()//
  {
   var numero1= parseFloat(document.getElementById("cajafuerza").value);// definición de variable
 
   var numero2= parseFloat(document.getElementById("cajadistancia").value);//definición de variable
   
   var numero3= parseFloat(document.getElementById("cajaangulo").value);// definición de variable
   
   numero3=(numero3*Math.PI)/180//proceso matematico
   
   var trabajo=numero1*numero2*(Math.cos(numero3))// variable
   
   console.log (numero1/numero2);//proceso matematico
   
   alert("El trabajo en jules es: "+trabajo);// mostrar datos escribir   
 }
 function numeromayormenor()//funcion de boton

{
//alert ("numero mayor menor");
var numero1 = parseFloat(document.getElementById("numero1").value);//dijitar numero de caja
console.log(numero1);//MOSTRAR EN CONSOLA
var numero2 = parseFloat(document.getElementById("numero2").value);//dijitar numero de caja
console.log(numero2);//mostrar en consola
var numero3 = parseFloat(document.getElementById("numero3").value);//dijitar numero de caja
console.log(numero3);//mostrar en consola


if(numero1<numero2 & numero1<numero3)//espresion logica
    {
        alert(" el numero  es menor"+numero1)//alerta

    }
    else if(numero2<numero1 & numero2<numero3)

    {
        alert(" el numero es menor"+numero2)
    }
     else (numero3<numero1 & numero3<numero2)
    {
        alert(" el numero es menor"+numero3)
    }




 if(numero1>numero2&numero1>numero3)//espresion logica
    {
        alert(" el numero  es mayor"+numero1)//alerta

    }
    else if(numero2>numero1 & numero2>numero3)

    {
        alert(" el numero es mayor"+numero2)
    }
     else (numero3>numero1 & numero3>numero2)
    {
        alert(" el numero es mayor"+numero3)
    }

    
 if(numero1==numero2&numero1==numero3)//espresion logica
    {
        alert(" el numero  es igual"+numero1)//alerta

    }
    else if(numero2==numero1 & numero2==numero3)

    {
        alert(" el numero es igual"+numero2)
    }
     else (numero3==numero1 & numero3==numero2)
    {
        alert(" el numero es igual"+numero3)
    }



}





function funcionparimpar()
{
 var numero= parseFloat(document.getElementById("cajaparimpar").value);// definición de variable
 console.log(numero);
 
 if(numero % 2 ==0 )//espresion logica
    {
        alert(" el numeroi es par"+numero)//alerta

    }

    else{
        alert("El  numero  es impar"+numero);// mostrar datos escribir  

    }
  
}
function obtenerporcentaje(){

    // Primero empezamos por poner las variables; en este caso ocupamos las variables mujeres y hombres
    
       var mujeres = parseFloat(document.getElementById("cajamujer").value);
    
       console. log (mujeres)
    
       var hombres = parseFloat(document.getElementById("cajahombre").value);
    
       console.log(hombres)
    
    // No es necesario usar condicionales. Ocupamos la alerta y afuera de esa alerta usamos la operación matemática. +mujeres/(mujeres+hombres)*100) 
    
       alert("El porcentaje de mujeres son:"+mujeres/(mujeres+hombres)*100) 
    
       alert("El porcentaje de hombres son:"+hombres/(hombres+mujeres)*100)




}
 function calculardescuento() {

    var articulo = (document.getElementById("cajaarticulo").value);
 
    console. log (articulo)
 
    var  clave= parseFloat(document.getElementById("cajaclave").value);
 
    console.log(clave)
 
    var precio= parseFloat(document.getElementById("cajaprecio").value);
 
    console. log (precio)
 
    var descuento1= parseFloat(document.getElementById.value);
 
    console. log (descuento1)
 
    var descuento2= parseFloat(document.getElementById.value);
 
    console. log (descuento2)


    if(clave==01)

    {
 
       alert ("El nombre de esto es."+articulo)
 
       alert ("El precio de este articulo es:"+precio)
 
       alert ("La clave es: "+clave)
 
       descuento1=precio*10/100
 
    
 
       alert ("El precio con descuento es:"+descuento1)
 
       
 
 
 
    }
 
 
 
    else if(clave==02)
 
    {
 
       alert ("El nombre de esto es."+articulo)
 
       alert ("El precio de este articulo es:"+precio)
 
       alert ("La clave es: "+clave)
 
       descuento2=precio*0.20
 
       alert ("El precio con descuento es:"+descuento2)
 
      
 
 
 
    }


 }



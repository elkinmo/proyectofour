function ver(n)
{

document.getElementById("subseccion"+n).style.display="block"
}

function ocultar(n)
{
    document.getElementById("subseccion"+n).style.display="none"
}








function myfuction()
{
    if(x.matches)
    {
        console.log("360-480");
        //alert("tamaño entre 360 y 480");
        document.body.style.backgroundColor=" rgba(0, 158, 250, 0.938)";

    }
}

function myfuction2()
{
    if(x.matches)
    {
        console.log("360-480");
        //alert("tamaño entre 360 y 480");
        //document.body.style.backgroundColor=" rgba(0, 158, 250, 0.938)";
       document.getElementById("seccion1").style.marginLeft="15%";
       document.getElementById("seccion2").style.marginLeft="15%";
       document.getElementById("seccion3").style.marginLeft="15%";
    }
 
}
var x = window.matchMedia("(min-width : 360px) and (max-width : 480px)")

myfuction2(x);

x.addListener( myfuction2)



 var x = window.matchMedia("(min-width : 360px) and (max-width : 480px)")
 myfuction(x);
 x.addListener(myfuction)

 
 function myfuction1()
 {
     if(x.matches)
     {
         console.log("360-480");
         //alert("tamaño entre 360 y 480");
         //document.body.style.backgroundColor=" rgba(0, 158, 250, 0.938)";
        document.getElementById("titulo").style.fontSize="90%";
        document.getElementById("titulo1").style.fontSize="90%";
        document.getElementById("titulo2").style.fontSize="90%";
     }
     
  
 }
 var x = window.matchMedia("(min-width : 360px) and (max-width : 480px)")
 
 myfuction1(x); 
 x.addListener( myfuction1)


 function mostrar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("contenido").style.marginLeft = "300px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultarm() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}

 
  

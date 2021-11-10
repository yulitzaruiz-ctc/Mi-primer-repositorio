

/*var clima = parseInt(prompt("ingrese un clima"));
switch (clima){
case(clima);
    console.log("recuerda llevar un paraguas");
    alert("recuerdad llevar un paraguas");
    break;
case(clima);
    console.log('viste ligero');
    alert('viste ligero')
    break;
case (clima);
    console.log('sal a la calle');
    alert('sal a la calle');
    break;
default:
    console.log('tipo de clima desconocido');
    alert('tipo de clima desconocido');
    break;
}*/

ejemplo 2;

var num = parseInt(prompt('ingrese un numero'));

switch(num){
case 1: console.log('num tiene el valor 1');
alert('num tiene el valor 1');
break;

case 2: console.log('num  tiene el numero 2');
alert('num tiene el numero 2');
break;

default: console.log('num no vale ni 1 ni 2');
alert('num no vale ni 1 ni 2');
}


// switch multiple

switch(num){
    case 1:
    case 2:
    case 3:
        console.log('num es impar');
        alert('num es inpar');
        break;
     case 2:
     case 4:
    console.log('num es par');
    alert('num es par');
}
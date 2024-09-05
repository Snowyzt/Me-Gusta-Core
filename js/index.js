// Primera caja

let n = document.querySelector('.lNumbers');
console.log(n);

let likeBoton = document.querySelector('.lButton');
console.log(likeBoton)

likeBoton.addEventListener('click', function(){
    let numero = Number(n.innerText);
    numero ++;
    console.log(numero)
    n.innerText = numero 
})

// Segunda caja

let n2 = document.querySelector('#n2');
console.log(n2);

let likeBoton2 = document.querySelector('#b2');
console.log(likeBoton2)

likeBoton2.addEventListener('click', function(){
    let numero2 = Number(n2.innerText);
    numero2 ++;
    console.log(numero2)
    n2.innerText = numero2 
})

// Tercer caja

let n3 = document.querySelector('#n3');
console.log(n3);

let likeBoton3 = document.querySelector('#b3');
console.log(likeBoton3)

likeBoton3.addEventListener('click', function(){
    let numero3 = Number(n3.innerText);
    numero3 ++;
    console.log(numero3)
    n3.innerText = numero3 
})
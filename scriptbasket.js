document.addEventListener("DOMContentLoaded", () => {
   let Borsch=localStorage.getItem('Борщ');
if (Borsch>0){
let basketBorsch = document. querySelector ("#Borsch")
basketBorsch.style.display="block"
let Borschsolvo = document. querySelector ("#Borschcolvo")
Borschcolvo.innerHTML=Borsch

}
let Poke=localStorage.getItem('Поке');
if (Poke>0){
let basketPoke = document. querySelector ("#Poke")
basketPoke.style.display="block"
let Pokecolvo = document. querySelector ("#Pokecolvo")
Pokecolvo.innerHTML=Poke

}

let Karbonara=localStorage.getItem('Карбонара');
if (Karbonara>0){
let basketKarbonara = document. querySelector ("#Karbonara")
basketKarbonara.style.display="block"
let Karbonaracolvo = document. querySelector ("#Karbonaracolvo")
Karbonaracolvo.innerHTML=Karbonara
}
let Grecha=localStorage.getItem('гречка');
if (Grecha>0){
let basketGrecha = document. querySelector ("#Grecha")
basketGrecha.style.display="block"
let Grechacolvo = document. querySelector ("#Grechacolvo")
Grechacolvo.innerHTML=Grecha
}
let Dranik=localStorage.getItem('Драники');
if (Dranik>0){
let basketDranik = document. querySelector ("#Dranik")
basketDranik.style.display="block"
let Dranikcolvo = document. querySelector ("#Dranikcolvo")
Dranikcolvo.innerHTML=Dranik
}
let Sale=document.querySelector('#Sale')
let Nam=document.querySelector('#nam')
let Tel=document.querySelector('#tel')
const tg = window.Telegram.WebApp;
tg.ready();
Sale. onclick = () =>{
tg.sendData(JSON.stringify({
    Borsch: localStorage.getItem('Борщ'),
    Poke: localStorage.getItem('Поке'),
    Karbonara: localStorage.getItem('Карбонара'),
    Grecha: localStorage.getItem('гречка'),
    Dranik: localStorage.getItem('Драники'),
    Username: Nam.value,
    Usertel: Tel.value

      }));
}
})
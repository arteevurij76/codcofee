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
let Pokesolvo = document. querySelector ("#Pokecolvo")
Pokecolvo.innerHTML=Poke

}
  });
let Sale=document.querySelector('#Sale')
const tg = window.Telegram.WebApp;
tg.ready();
Sale. onclick = () =>{
tg.sendData(JSON.stringify({
    Borsch: localStorage.getItem('Борщ'),
    Poke: localStorage.getItem('Поке')
      }));
}

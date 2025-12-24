

let Borschcolvo=0
let Pokecolvo=0
let Dranikicolvo=0
let Karbonaracolvo=0

let btnBorsch = document. querySelector ("button#Борщ")
let spanborsch = document. querySelector ("span#Borschcolvo")
let addBorsch = document. querySelector ("button#Добавить_борщ")
let minusBorsch = document. querySelector ("button#Убрать_борщ")
btnBorsch. onclick = () => {
Borschcolvo+=1
localStorage.setItem('Борщ', Borschcolvo);
spanborsch.innerHTML=Borschcolvo
btnBorsch.style.display="none"
addBorsch.style.display="inline"
minusBorsch.style.display="inline"
}
addBorsch. onclick = () =>{
Borschcolvo+=1
localStorage.setItem('Борщ', Borschcolvo);
spanborsch.innerHTML=Borschcolvo
}
minusBorsch. onclick = () =>{
if (Borschcolvo >0){
Borschcolvo-=1
localStorage.setItem('Борщ', Borschcolvo);
spanborsch.innerHTML=Borschcolvo
}
if(Borschcolvo==0){
addBorsch.style.display="none"
minusBorsch.style.display="none"
btnBorsch.style.display="block"
}}



let btnPoke = document. querySelector ("button#Поке")
let spanPoke = document. querySelector ("span#Pokecolvo")
let addPoke = document. querySelector ("button#Добавить_Поке")
let minusPoke = document. querySelector ("button#Убрать_Поке")
btnPoke. onclick = () => {
Pokecolvo+=1
localStorage.setItem('Поке', Pokecolvo);
spanPoke.innerHTML=Pokecolvo
btnPoke.style.display="none"
addPoke.style.display="inline"
minusPoke.style.display="inline"
}
addPoke. onclick = () =>{
Pokecolvo+=1
localStorage.setItem('Поке', Pokecolvo);
spanPoke.innerHTML=Pokecolvo
}
minusPoke. onclick = () =>{
if (Pokecolvo >0){
Pokecolvo-=1
localStorage.setItem('Поке', Pokecolvo);
spanPoke.innerHTML=Pokecolvo
}
if(Pokecolvo==0){
addPoke.style.display="none"
minusPoke.style.display="none"
btnPoke.style.display="block"
}}




let btnKarbonara = document. querySelector ("button#Карбонара")
btnKarbonara. onclick = () => {

}



let btnDraniki = document. querySelector ("button#Драники")
btnDraniki. onclick = () => {

}
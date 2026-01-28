let Borschcolvo = 0
let Pokecolvo = 0
let Grechacolvo = 0
let Dranikcolvo = 0
let Karbonaracolvo = 0

// БОРЩ
let btnBorsch = document.querySelector("button#Борщ")
let spanborsch = document.querySelector("span#Borschcolvo")
let addBorsch = document.querySelector("button#Добавить_борщ")
let minusBorsch = document.querySelector("button#Убрать_борщ")

btnBorsch.onclick = () => {
    Borschcolvo += 1
    localStorage.setItem('Борщ', Borschcolvo);
    spanborsch.innerHTML = Borschcolvo
    btnBorsch.style.display = "none"
    addBorsch.style.display = "inline"
    minusBorsch.style.display = "inline"
}

addBorsch.onclick = () => {
    Borschcolvo += 1
    localStorage.setItem('Борщ', Borschcolvo);
    spanborsch.innerHTML = Borschcolvo
}

minusBorsch.onclick = () => {
    if (Borschcolvo > 0) {
        Borschcolvo -= 1
        localStorage.setItem('Борщ', Borschcolvo);
        spanborsch.innerHTML = Borschcolvo
    }
    if (Borschcolvo == 0) {
        addBorsch.style.display = "none"
        minusBorsch.style.display = "none"
        btnBorsch.style.display = "block"
    }
}

// ПОКЕ
let btnPoke = document.querySelector("button#Поке")
let spanPoke = document.querySelector("span#Pokecolvo")
let addPoke = document.querySelector("button#Добавить_Поке")
let minusPoke = document.querySelector("button#Убрать_Поке")

btnPoke.onclick = () => {
    Pokecolvo += 1
    localStorage.setItem('Поке', Pokecolvo);
    spanPoke.innerHTML = Pokecolvo
    btnPoke.style.display = "none"
    addPoke.style.display = "inline"
    minusPoke.style.display = "inline"
}

addPoke.onclick = () => {
    Pokecolvo += 1
    localStorage.setItem('Поке', Pokecolvo);
    spanPoke.innerHTML = Pokecolvo
}

minusPoke.onclick = () => {
    if (Pokecolvo > 0) {
        Pokecolvo -= 1
        localStorage.setItem('Поке', Pokecolvo);
        spanPoke.innerHTML = Pokecolvo
    }
    if (Pokecolvo == 0) {
        addPoke.style.display = "none"
        minusPoke.style.display = "none"
        btnPoke.style.display = "block"
    }
}

// ГРЕЧКА
let btnGrecha = document.querySelector("button#гречка")
let spanGrecha = document.querySelector("span#Grechacolvo")
let addGrecha = document.querySelector("button#Добавить_гречу")
let minusGrecha = document.querySelector("button#Убрать_гречу")

btnGrecha.onclick = () => {
    Grechacolvo += 1
    localStorage.setItem('гречка', Grechacolvo);
    btnGrecha.style.display = "none"
    addGrecha.style.display = "inline"
    minusGrecha.style.display = "inline"
    spanGrecha.innerHTML = Grechacolvo
}

addGrecha.onclick = () => {
    Grechacolvo += 1
    spanGrecha.innerHTML = Grechacolvo
    localStorage.setItem('гречка', Grechacolvo);
}

minusGrecha.onclick = () => {
    if (Grechacolvo > 0) {
        Grechacolvo -= 1
        spanGrecha.innerHTML = Grechacolvo
        localStorage.setItem('гречка', Grechacolvo);
    }
    if (Grechacolvo == 0) {
        addGrecha.style.display = "none"
        minusGrecha.style.display = "none"
        btnGrecha.style.display = "block"
    }
}

// ДРАНИКИ
let btnDranik = document.querySelector("button#Драники")
let spanDranik = document.querySelector("span#Dranikcolvo")
let addDranik = document.querySelector("button#Добавить_драник")
let minusDranik = document.querySelector("button#Убрать_драник")

btnDranik.onclick = () => {
    Dranikcolvo += 1
    localStorage.setItem('Драники', Dranikcolvo);
    btnDranik.style.display = "none"
    addDranik.style.display = "inline"
    minusDranik.style.display = "inline"
    spanDranik.innerHTML = Dranikcolvo
}

addDranik.onclick = () => {
    Dranikcolvo += 1
    localStorage.setItem('Драники', Dranikcolvo);
    spanDranik.innerHTML = Dranikcolvo
}

minusDranik.onclick = () => {
    if (Dranikcolvo > 0) {
        Dranikcolvo -= 1
        localStorage.setItem('Драники', Dranikcolvo);
        spanDranik.innerHTML = Dranikcolvo
    }
    if (Dranikcolvo == 0) {
        addDranik.style.display = "none"
        minusDranik.style.display = "none"
        btnDranik.style.display = "block"
    }
}

// КАРБОНАРА
let btnKarbonara = document.querySelector("button#Карбонара")
let spanKarbonara = document.querySelector("span#Karbonaracolvo")
let addKarbonara = document.querySelector("button#Добавить_фету")
let minusKarbonara = document.querySelector("button#Убрать_фету")

btnKarbonara.onclick = () => {
    Karbonaracolvo += 1
    localStorage.setItem('Карбонара', Karbonaracolvo);
    btnKarbonara.style.display = "none"
    addKarbonara.style.display = "inline"
    minusKarbonara.style.display = "inline"
    spanKarbonara.innerHTML = Karbonaracolvo
}

addKarbonara.onclick = () => {
    Karbonaracolvo += 1
    localStorage.setItem('Карбонара', Karbonaracolvo);
    spanKarbonara.innerHTML = Karbonaracolvo
}

minusKarbonara.onclick = () => {
    if (Karbonaracolvo > 0) {
        Karbonaracolvo -= 1
        localStorage.setItem('Карбонара', Karbonaracolvo);
        spanKarbonara.innerHTML = Karbonaracolvo
    }
    if (Karbonaracolvo == 0) {
        addKarbonara.style.display = "none"
        minusKarbonara.style.display = "none"
        btnKarbonara.style.display = "block"
    }
}

// Функция для загрузки и отображения сохраненных значений
function loadFromLocalStorage() {
    // Загружаем значения из localStorage
    const savedBorsch = localStorage.getItem('Борщ');
    const savedPoke = localStorage.getItem('Поке');
    const savedKarbonara = localStorage.getItem('Карбонара');
    const savedGrecha = localStorage.getItem('гречка');
    const savedDranik = localStorage.getItem('Драники');

    // Устанавливаем значения переменных
    Borschcolvo = savedBorsch ? parseInt(savedBorsch) : 0;
    Pokecolvo = savedPoke ? parseInt(savedPoke) : 0;
    Karbonaracolvo = savedKarbonara ? parseInt(savedKarbonara) : 0;
    Grechacolvo = savedGrecha ? parseInt(savedGrecha) : 0;
    Dranikcolvo = savedDranik ? parseInt(savedDranik) : 0;

    // Отображаем значения на странице
    if (spanborsch) spanborsch.innerHTML = Borschcolvo;
    if (spanPoke) spanPoke.innerHTML = Pokecolvo;
    if (spanKarbonara) spanKarbonara.innerHTML = Karbonaracolvo;
    if (spanGrecha) spanGrecha.innerHTML = Grechacolvo;
    if (spanDranik) spanDranik.innerHTML = Dranikcolvo;

    // Показываем кнопки "+" и "-" если есть товары (больше 0)
    if (Borschcolvo > 0) {
        if (btnBorsch) btnBorsch.style.display = "none";
        if (addBorsch) addBorsch.style.display = "inline";
        if (minusBorsch) minusBorsch.style.display = "inline";
    }

    if (Pokecolvo > 0) {
        if (btnPoke) btnPoke.style.display = "none";
        if (addPoke) addPoke.style.display = "inline";
        if (minusPoke) minusPoke.style.display = "inline";
    }

    if (Karbonaracolvo > 0) {
        if (btnKarbonara) btnKarbonara.style.display = "none";
        if (addKarbonara) addKarbonara.style.display = "inline";
        if (minusKarbonara) minusKarbonara.style.display = "inline";
    }

    if (Grechacolvo > 0) {
        if (btnGrecha) btnGrecha.style.display = "none";
        if (addGrecha) addGrecha.style.display = "inline";
        if (minusGrecha) minusGrecha.style.display = "inline";
    }

    if (Dranikcolvo > 0) {
        if (btnDranik) btnDranik.style.display = "none";
        if (addDranik) addDranik.style.display = "inline";
        if (minusDranik) minusDranik.style.display = "inline";
    }
}

// Загружаем сохраненные значения при загрузке страницы
document.addEventListener("DOMContentLoaded", loadFromLocalStorage);
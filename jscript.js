let quantityElement = document.querySelector(".form__input--quantity");
let currencyElement = document.querySelector(".form__input--currency");
let formElement = document.querySelector(".form");
let finalElement = document.querySelector(".kalkulator");



formElement.addEventListener("submit", (event) => {
event.preventDefault();

let quantity = quantityElement.value;
let currency = currencyElement.value;

let final = quantity * currency;

finalElement.innerText = `${final} PLN`;

});

const data = new Date();
const hora = data.getHours();

function horas_cardapio() {
    const el = document.getElementById("horas_cardapio");

    if (hora < 18) {
        el.classList.remove("bg-green-500");
        el.classList.add("bg-red-600");
    }
}
window.onload = horas_cardapio;

function checkRestaurantOpen() {
    dateSpan = document.getElementById("date-span");
    return hora >= 18;
}

const isOpen = checkRestaurantOpen();

if (isOpen) {
    dateSpan.classList.remove("bg-red-500");
    dateSpan.classList.add("bg-green-600");
} else {
    dateSpan.classList.remove("bg-green-600");
    dateSpan.classList.add("bg-red-500");
    dateSpan.textContent = "Fechado";
}

window.onload = checkRestaurantOpen;




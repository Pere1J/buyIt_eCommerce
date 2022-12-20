const plus = document.querySelector(".plus_button"),
minus = document.querySelector(".minus_button"),
num = document.querySelector(".quantity_number");

let a = 0;

plus.addEventListener("click", ()=>{
    a++;
    (a < 10) ? "0" + a : a;
    num.innerText = a;
    console.log(a);
});
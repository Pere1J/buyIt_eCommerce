// const plus = document.querySelector(".plus_button"),
// minus = document.querySelector(".minus_button"),
// num = document.querySelector(".quantity_number");

let a = 0;

function addItem() {
  if (a < 10) {
    a++;
    //console.log(a);
    
  } else {
    a = 10;
    //console.log(a);
  }
  renderNumber();
}

function subsItem() {
  if (a > 0) {
    a--;
    //console.log(a);
  } else {
    a = 0;
    //console.log(a);
  }
  renderNumber();
}

function renderNumber() {
    let totalItems = document.querySelector("#quantity_number");
    totalItems.innerHTML = a.toString();
    //console.log(totalItems);
}
//document.getElementById(".quantity_number span").innerHTML = a;

renderNumber();
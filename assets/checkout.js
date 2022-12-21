let a = 1;
let priceA = 1319;

let b = 1;
let priceB = 1159;

function addItemA() {
  if (a < 10) {
    a++;
  }

  renderNumber();
  addTotal();
}
function subsItemA() {
  if (a > 0) {
    a--;
  }
  renderNumber();
  addTotal();
}
function addItemB() {
  if (b < 10) {
    b++;
  }
  renderNumber();
  addTotal();
}

function subsItemB() {
  if (b > 0) {
    b--;
  }
  renderNumber();
  addTotal();
}

let total = a * priceA + b * priceB;

function addTotal() {
  let total = a * priceA + b * priceB;
  let totalPrice = document.querySelector("#total_price");
  totalPrice.innerHTML = total.toString();
  return total;
}

function renderNumber() {
  let totalItemA = document.querySelector("#quantity_number_A");
  totalItemA.innerHTML = a.toString();
  let totalItemB = document.querySelector("#quantity_number_B");
  totalItemB.innerHTML = b.toString();
}

renderNumber();

let isAuth = false;

const pizzas = [
  { id: 1, name: "Маргарита", price: 150 },
  { id: 2, name: "Пепероні", price: 190 },
  { id: 3, name: "4 Сири", price: 210 }
];

const bankCards = [
  { number: "**** **** **** 1234", owner: "Іван Іванов" },
  { number: "**** **** **** 5678", owner: "Петро Петренко" }
];

const pizzaList = document.getElementById("pizza-list");
const bankList = document.getElementById("bank-cards");
const modal = document.getElementById("modal");
const loginBtn = document.getElementById("loginBtn");

function renderPizzas() {
  pizzaList.innerHTML = "";
  pizzas.forEach(pizza => {
    pizzaList.insertAdjacentHTML("beforeend", `
      <div class="card" data-id="${pizza.id}">
        <h3>${pizza.name}</h3>
        <p>Ціна: ${pizza.price} грн</p>
      </div>
    `);
  });
}

function renderBankCards() {
  bankList.innerHTML = "";
  bankCards.forEach(card => {
    bankList.insertAdjacentHTML("beforeend", `
      <div class="card">
        <p>${card.number}</p>
        <p>${card.owner}</p>
      </div>
    `);
  });
}

pizzaList.addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  if (!card) return;

  if (!isAuth) {
    modal.classList.remove("hidden");
  } else {
    alert("Ви замовили піцу 🍕");
  }
});

loginBtn.addEventListener("click", () => {
  isAuth = true;
  modal.classList.add("hidden");
  alert("Ви успішно увійшли!");
});

renderPizzas();
renderBankCards();

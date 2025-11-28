const API = "/api";
const menuDiv = document.getElementById("menu");
const cartDiv = document.getElementById("cart");
let cart = [];

async function loadMenu() {
  const res = await fetch(`${API}/menu`);
  const menu = await res.json();
  menuDiv.innerHTML = "";
  menu.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${item.name}</h3><p>₹${item.price}</p><button onclick="addToCart('${item.id}')">Add to Cart</button>`;
    menuDiv.appendChild(card);
  });
}

function addToCart(id) {
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ id, qty: 1 });
  renderCart();
}

function renderCart() {
  cartDiv.innerHTML = cart.map(c => `Item: ${c.id} | Qty: ${c.qty}`).join('<br>');
}

document.getElementById("placeOrder").onclick = async () => {
  const res = await fetch(`${API}/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart }),
  });
  const result = await res.json();
  alert("Order placed! ID: " + result.orderId);
};

loadMenu();

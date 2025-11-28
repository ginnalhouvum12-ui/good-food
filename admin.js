const API2 = "/api";

async function loadOrders() {
  const r = await fetch(`${API2}/orders`);
  const data = await r.json();
  const div = document.getElementById("orders");
  div.innerHTML = "";
  data.forEach(o => {
    const d = document.createElement("div");
    d.className = "card";
    d.innerHTML = `<h3>Order #${o.id}</h3><p>${JSON.stringify(o.cart)}</p><button onclick="markDone(${o.id})">Mark Delivered</button>`;
    div.appendChild(d);
  });
}

async function markDone(id) {
  await fetch(`${API2}/order?id=${id}`, { method: "PUT" });
  loadOrders();
}

loadOrders();

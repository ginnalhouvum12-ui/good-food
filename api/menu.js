export default function handler(req, res) {
  res.json([
    { id: "biryani", name: "Chicken Biryani", price: 150 },
    { id: "momo", name: "Momo", price: 80 },
    { id: "thali", name: "Veg Thali", price: 120 }
  ]);
}

let orders = [];

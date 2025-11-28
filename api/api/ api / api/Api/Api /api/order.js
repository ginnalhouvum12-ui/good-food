export function config() { return { runtime: "edge" }; }

export default async function handler(req) {
  if (req.method === "POST") {
    const body = await req.json();
    const id = orders.length + 1;
    orders.push({ id, cart: body.cart, status: "pending" });
    return new Response(JSON.stringify({ orderId: id }), { status: 200 });
  }
  if (req.method === "PUT") {
    const id = new URL(req.url).searchParams.get("id");
    const order = orders.find(o => o.id == id);
    if (order) order.status = "delivered";
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }
}

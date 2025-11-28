export function config() { return { runtime: "edge" }; }

export default function handler() {
  return new Response(JSON.stringify(orders.filter(o => o.status !== "delivered")), { status: 200 });
}

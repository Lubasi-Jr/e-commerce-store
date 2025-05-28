import { NextRequest, NextResponse } from "next/server";
import { useCart } from "@/context/CartContext";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text(); // Payfast sends URL-encoded form data, not JSON
    console.log("Received Payfast notification:", body);
    const { clearCart } = useCart();
    clearCart();

    return new Response("OK", { status: 200 }); // This is key for Payfast
  } catch (error) {
    console.error("Error handling Payfast notification:", error);
    return new Response("Bad Request", { status: 400 });
  }
}

// Function used to generate the data entries for the form and return an object
"use client";
import { useAuth } from "@/context/AuthWrapper";
import { useCart } from "@/context/CartContext";
import crypto from "crypto";

export function generateSignature(
  data: Record<any, any>,
  passPhrase?: string | null
): string {
  let pfOutput = "";

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      if (value !== "") {
        pfOutput += `${key}=${encodeURIComponent(value).replace(/%20/g, "+")}&`;
      }
    }
  }

  let getString = pfOutput.slice(0, -1);

  if (passPhrase) {
    getString += `&passphrase=${encodeURIComponent(passPhrase.trim()).replace(
      /%20/g,
      "+"
    )}`;
  }

  return crypto.createHash("md5").update(getString).digest("hex");
}

export function generateFormData() {
  const { cart, totalPrice } = useCart();
  const { user } = useAuth();
  const payfast_paraphrase = process.env.NEXT_PUBLIC_PAYFAST_PARAPHRASE;
  const paymentData = {
    merchant_id: process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID,
    merchant_key: process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_KEY,
    return_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
    name_first: user?.firstName,
    name_last: user?.surname,
    email_address: user?.email,
    m_payment_id: "1234",
    amount: totalPrice,
    item_name: "STYLAS_Order_#103",
    email_confirmation: "1",
    confirmation_address: user?.email,
    signature: "",
  };

  paymentData.signature = generateSignature(paymentData, payfast_paraphrase);

  return paymentData;
}

import CheckoutForm from "@/components/CheckoutFomr";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Donate with hosted Checkout | Next.js + TypeScript Example",
};


export default function Home() {
  return (
    <main className="page-container">
      <h1>Donate with hosted Checkout</h1>
      <p>Donate to our project 💖</p>
      <CheckoutForm uiMode="hosted" />
    </main>
  );
}

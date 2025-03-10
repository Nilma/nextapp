'use client';
import Navbar from '@/components/Navbar';
import { useShop } from '@/context/ShopContext';

export default function CheckoutPage() {
  const { cart, clearCart } = useShop();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-2">
              {cart.map((item, idx) => (
                <li key={idx} className="border p-2 rounded">
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-bold">Total: ${total}</p>
            <button onClick={clearCart} className="bg-green-600 text-white px-4 py-2 mt-4 rounded">
              Complete Purchase
            </button>
          </>
        )}
      </div>
    </div>
  );
}
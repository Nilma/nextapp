'use client';

import { useShop } from '@/context/ShopContext';
import Image from 'next/image';

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export default function DrinkCard({ drink }: { drink: Drink }) {
  const { addToCart } = useShop();

  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">{drink.strDrink}</h3>
      <Image
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        width={300}
        height={300}
        className="w-full h-32 object-cover my-2 rounded"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => addToCart({ id: drink.idDrink, name: drink.strDrink, price: 10 })}
      >
        Add to Cart ($10)
      </button>
    </div>
  );
}
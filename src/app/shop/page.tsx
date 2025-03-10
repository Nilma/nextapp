'use client';
import Navbar from '@/components/Navbar';
import { useShop } from '@/context/ShopContext';
import { useEffect, useState } from 'react';

export default function ShopPage() {
  const [drinks, setDrinks] = useState<any[]>([]);
  const { addToCart } = useShop();

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon')
      .then((res) => res.json())
      .then((data) => setDrinks(data.drinks || []));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Lemon Drinks</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {drinks.map((drink) => (
            <div key={drink.idDrink} className="border p-4 rounded">
              <h3 className="font-bold">{drink.strDrink}</h3>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full h-32 object-cover my-2 rounded" />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() =>
                  addToCart({ id: drink.idDrink, name: drink.strDrink, price: 10 })
                }
              >
                Add to Cart ($10)
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
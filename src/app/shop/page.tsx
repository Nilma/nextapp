import Navbar from '@/components/Navbar';
import DrinkCard from './DrinkCard';

// Define the type for the drinks
interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

// Fetch data directly on the server
async function getDrinks(): Promise<Drink[]> {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon', {
    cache: 'no-store', // Ensure fresh data on each request
  });
  const data = await res.json();
  return data.drinks || [];
}

export default async function ShopPage() {
  const drinks = await getDrinks();

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Lemon Drinks</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      </div>
    </div>
  );
}
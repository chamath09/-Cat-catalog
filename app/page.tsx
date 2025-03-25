// app/page.tsx
import Link from "next/link";
import { fetchCatBreeds } from "./api/catBreeds";

export default async function Home() {
  const catBreeds = await fetchCatBreeds();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Cat Catalog</h1>
      <div className="max-w-md mx-auto">
        {catBreeds.length > 0 ? (
          <ul className="space-y-2">
            {catBreeds.map((breed) => (
              <li
                key={breed.id}
                className="border border-gray-500 rounded-lg hover:border-gray-300 hover:scale-[1.02] hover:shadow-md transition duration-200"
              >
                <Link href={`/breed/${breed.id}`}>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition">
                    <span className="text-lg font-medium">
                      {breed.name}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No cat breeds found.</p>
        )}
      </div>
    </div>
  );
}

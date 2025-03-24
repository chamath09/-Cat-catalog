// app/breed/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { fetchCatBreeds } from "../../api/catBreeds";

interface BreedPageProps {
  params: Promise<{ id: string }>; // Update the type to reflect that params is a Promise
}

export default async function BreedPage({ params }: BreedPageProps) {
  // Await the params object to resolve it
  const resolvedParams = await params;
  const catBreeds = await fetchCatBreeds();
  // Now safely access resolvedParams.id
  const breed = catBreeds.find((b) => b.id === resolvedParams.id);

  if (!breed) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Breed Not Found</h1>
        <p className="text-center text-gray-500">
          The cat breed you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          {/* Breed Name with Back Arrow on the Same Line */}
          <h1 className="text-2xl font-bold mb-4 flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center text-gray-700 hover:text-gray-900 transition">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
            </Link>
            <span className="flex-1 text-center">{breed.name}</span>
          </h1>

          {/* Breed Details */}
          {breed.image?.url ? (
            <div className="relative w-full h-64 mb-4">
              <Image
                src={breed.image.url}
                alt={breed.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ) : (
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Origin:</span> {breed.origin}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Life Span:</span> {breed.life_span}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Description:</span>{" "}
            {breed.description}
          </p>
        </div>
      </div>
    </div>
  );
}

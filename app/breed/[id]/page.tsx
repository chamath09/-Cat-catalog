import Image from "next/image";
import Link from "next/link";
import { fetchCatBreeds } from "../../api/catBreeds";

interface BreedPageProps {
  params: Promise<{ id: string }>;
}

export default async function BreedPage({ params }: BreedPageProps) {
  const resolvedParams = await params;
  const catBreeds = await fetchCatBreeds();
  const catBreed = catBreeds.find((b) => b.id === resolvedParams.id);

  if (!catBreed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Breed Not Found
          </h1>
          <p className="text-lg text-gray-500">
            The cat breed you are looking for does not exist.
          </p>
          <Link href="/">
            <div className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300">
              Back to Home
            </div>
          </Link>
        </div>
      </div>
    );
  }

  const breed = catBreed;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-6 flex  justify-center">
      <div className="max-w-sm w-full mx-auto">
        <div className="bg-white rounded-xl shadow-2xl p-6 transform transition-all duration-500 hover:shadow-xl animate-fade-in border border-gray-400">
          <h1 className="text-2xl font-extrabold text-gray-800 mb-4 flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center text-gray-600 hover:text-gray-800 transform hover:scale-110 transition duration-300">
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

          {breed.image?.url ? (
            <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden shadow-md">
              <Image
                src={breed.image.url}
                alt={breed.name}
                layout="fill"
                sizes="(max-width: 640px) 100vw, 640px"
                objectFit="cover"
                className="rounded-lg transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          ) : (
            <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center mb-4 shadow-md">
              <span className="text-gray-500 text-base">
                No image available
              </span>
            </div>
          )}

          <div className="space-y-3">
            <div className="border-b border-gray-200 pb-2 flex items-center space-x-2">
              <p className="text-s font-medium text-gray-950 uppercase tracking-wide">
                Origin :
              </p>
              <p className="text-base font-semibold text-gray-600">
                {breed.origin}
              </p>
            </div>

            <div className="border-b border-gray-200 pb-2 flex items-center space-x-2">
              <p className="text-s font-medium text-gray-950 uppercase tracking-wide">
                Life Span :
              </p>
              <p className="text-base font-semibold text-gray-600">
                {breed.life_span} years
              </p>
            </div>

            <div className="pt-1">
              <p className="text-s font-medium text-gray-900 uppercase tracking-wide">
                Description
              </p>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                {breed.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

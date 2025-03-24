// app/api/catBreeds.ts

// Define the CatBreed interface directly in this file
export interface CatBreed {
  id: string;
  name: string;
  origin: string;
  life_span: string;
  description: string;
  image?: {
    url: string;
  };
}

const API_KEY = process.env.CAT_API_KEY || '';
const API_URL = 'https://api.thecatapi.com/v1/breeds?limit=20';

export const fetchCatBreeds = async (): Promise<CatBreed[]> => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        'x-api-key': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch cat breeds');
    }

    const data: CatBreed[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cat breeds:', error);
    return [];
  }
};
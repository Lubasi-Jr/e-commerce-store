// types/index.d.ts
export {};

declare global {
  type Product = {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  };

  type Details = {
    name: string;
    price: number;
    details: string;
    primaryImg: string;
    secondaryImg: string;
  };
}

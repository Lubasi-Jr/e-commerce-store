// types/index.d.ts
export {};

declare global {
  type Product = {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  };
}

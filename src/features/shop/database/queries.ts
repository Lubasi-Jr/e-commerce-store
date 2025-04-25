import { supabase } from "@/lib/supabaseClient";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*,productImages(image_url,is_primary)"); // Join method to obtain images
    if (error) {
      throw error;
    }

    //Transform Data to type product
    const products = data.map((item: any) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      imageUrl: item.productImages?.[0]?.image_url ?? "/turnable.jpg", //If image is not found, default image is the turnable
    }));

    console.log(products);

    return products; // Return data here
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err; // Rethrow the error for React Query to handle it
  }
};

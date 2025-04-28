import { supabase } from "@/lib/supabaseClient";

export const fetchProducts = async (
  category?: string,
  decade?: string
): Promise<Product[]> => {
  try {
    let query = supabase
      .from("products")
      .select("*,productImages(image_url,is_primary)");

    if (category) {
      query = query.eq("category", category);
    }

    if (decade) {
      const decadeNumber = Number(decade); // 👈 Safely convert decade string to a number
      if (!isNaN(decadeNumber)) {
        query = query.lte("year", decadeNumber);
        // example: get products released BEFORE 1970
      }
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    const products = data.map((item: any) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      imageUrl: item.productImages?.[0]?.image_url ?? "/turnable.jpg",
    }));

    return products;
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
};

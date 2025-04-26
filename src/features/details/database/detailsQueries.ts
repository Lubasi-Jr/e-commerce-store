import { supabase } from "@/lib/supabaseClient";

export const fetchDetails = async (uuid: string): Promise<Details> => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*,productImages(image_url, is_primary)")
      .eq("id", uuid)
      .single();
    if (error) {
      throw error;
    }

    //Primary image and Secondary image
    const primaryImage = data.productImages.find((img: any) => img.is_primary);
    const primaryImageUrl =
      primaryImage?.image_url ?? "/VINYL DISC white bg.png";

    const secondaryImage = data.productImages.find(
      (img: any) => !img.is_primary
    );
    const secondaryImageUrl =
      secondaryImage?.image_url ?? "/VINYL DISC white bg.png";

    //Transform data
    const details = {
      name: data.name,
      price: data.price,
      details: data.details,
      primaryImg: primaryImageUrl,
      secondaryImg: secondaryImageUrl,
    };

    return details; // Return data here
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err; // Rethrow the error for React Query to handle it
  }
};

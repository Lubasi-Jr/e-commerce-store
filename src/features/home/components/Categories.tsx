import Image from "next/image";
import Banner from "@/features/home/components/Banner";
import { categories } from "@/features/home/constants";

const Categories = () => {
  return (
    <section className="w-full h-80 pb-8 px-3 flex overflow-x-scroll space-x-4 md:px-40 md:flex md:items-center md:justify-center scrollbar-hide">
      {categories.map((cat, index) => (
        <div
          key={index}
          id="categories"
          className="w-auto h-auto flex flex-col gap-0.5 items-center justify-center"
        >
          <div className="min-w-[255px] md:min-w-[200px] h-72 md:h-52 relative items-center">
            <Image src={cat.src} alt={cat.alt} fill />
          </div>
          <h1 className="font-inter text-2xl font-semibold w-80 md:w-52 mx-auto text-center break-words">
            {cat.text}
          </h1>
        </div>
      ))}
    </section>
  );
};

export default Categories;

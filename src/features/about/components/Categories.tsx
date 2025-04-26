import Image from "next/image";
import { aboutPhotos } from "../constants";

const Categories = () => {
  return (
    <>
      <h1 className="font-garamond font-bold text-center text-3xl mt-4 mb-4">
        MEET LUBASI
      </h1>
      <section className="w-full h-80 pb-8 px-3 flex overflow-x-scroll space-x-4 md:px-40 md:flex md:items-center md:justify-center scrollbar-hide">
        {aboutPhotos.map((cat, index) => (
          <div
            key={index}
            id="categories"
            className="w-auto h-auto flex flex-col gap-0.5 items-center justify-center"
          >
            <div className="min-w-[255px] md:min-w-[200px] h-72 md:h-52 relative items-center">
              <Image src={cat.src} alt={cat.alt} fill />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Categories;

import { Carousel } from "flowbite-react";

export function Galeria() {
  return (
    <div id="galeria" className="h-96 sm:h-screen xl:h-screen 2xl:h-screen">
      <Carousel>
        <img
          src="../../../public/biceps.webp"
          alt="..."
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
        <img
          src="../../../public/espalda.webp"
          alt="..."
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
        <img
          src="../../../public/senta.webp"
          alt="..."
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
        <img
          src="../../../public/traps.webp"
          alt="..."
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
        <img
          src="../../../public/horiFondo.webp"
          alt="..."
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
      </Carousel>
    </div>
  );
}
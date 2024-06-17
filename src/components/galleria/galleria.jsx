import { Carousel } from "flowbite-react";

export function Galeria() {
  return (
    <div id="galeria" className="h-96 sm:h-screen xl:h-screen 2xl:h-screen">
      <Carousel>
        <img
          src="../../../public/biceps.webp"
          alt="biceps"
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
        <img
          src="../../../public/espalda.webp"
          alt="espalda"
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
        <img
          src="../../../public/senta.webp"
          alt="senta"
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
        <img
          src="../../../public/traps.webp"
          alt="traps"
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
        <img
          src="../../../public/horiFondo.webp"
          alt="horiFondo"
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
      </Carousel>
    </div>
  );
}

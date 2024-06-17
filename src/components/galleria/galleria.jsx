import { Carousel } from "flowbite-react";
import Biceps from "../../assets/biceps.webp";
import Espalda from "../../assets/espalda.webp";
import Senta from "../../assets/senta.webp";
import Traps from "../../assets/traps.webp";
import Horizo from "../../assets/horiFondo.webp";

export function Galeria() {
  return (
    <div id="galeria" className="h-96 sm:h-screen xl:h-screen 2xl:h-screen">
      <Carousel>
        <img
          src={Biceps}
          alt="biceps"
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
        <img
          src={Espalda}
          alt="espalda"
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
        <img
          src={Senta}
          alt="senta"
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
        <img
          src={Traps}
          alt="traps"
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
        <img
          src={Horizo}
          alt="horiFondo"
          className="bg-top bg-no-repeat bg-cover max-h-full"
        />
      </Carousel>
    </div>
  );
}

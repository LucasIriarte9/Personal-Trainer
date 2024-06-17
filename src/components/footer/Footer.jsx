import { Footer } from "flowbite-react";

export function FooterMio() {
  return (
    <Footer container className="bg-[12140e] mx-auto">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand href="#" name="GymLucas" />
          <ul className="flex gap-5 text-white">
            <a href="#">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#galeria">Galeria</a>
            <a href="#membresia">Membresia</a>
          </ul>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="GymLucas" year={2022} />
      </div>
    </Footer>
  );
}

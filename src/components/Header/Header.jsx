export function Header() {
  return (
    <div className="flex flex-col items-center mx-auto md:flex-row md:justify-between md:mx-8 xl:mx-24">
      <section>
        <a href="/">
          <img className="size-32" src="../../public/gymIcon.webp" alt="" />
        </a>
      </section>
      <section className="flex items-center">
        <ul className="flex gap-5 text-white">
          <a href="#incio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#galeria">Galeria</a>
          <a href="#membresia">Membresia</a>
        </ul>
      </section>
    </div>
  );
}

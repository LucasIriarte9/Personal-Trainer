import Porcentajes from "./Porcentajes";

const Inicio = () => {
  return (
    <div className="xl:mx-24">
      <h1 className="text-white text-4xl mx-8 mt-16 md:mx-24 xl:text-7xl xl:mt-32 italic">
        Entrena <span className="text-lime-500 ">Tu cuerpo</span>
        <br />
        Tu Unico Santuario
      </h1>
      <p className=" mx-8 mt-6 text-white md:mx-24 md:mt-8 xl:ml-24 xl:w-[500px] italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat
        accusamus perspiciatis rem quis, rerum ad odio, sit a officiis eaque!
        Corporis modi saepe amet odit soluta non, possimus placeat.
      </p>
      <a
        href="https://web.whatsapp.com/"
        target="_blank"
        className="p-4 text-white flex bg-lime-500 rounded w-fit mt-6 mx-auto md:mt-12 xl:p-8 xl:text-2xl xl:mx-24"
      >
        Empeza Ahora
      </a>
      <Porcentajes />
    </div>
  );
};

export default Inicio;

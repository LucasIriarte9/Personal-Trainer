import "./App.css";
import { Header } from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import Nosotros from "./components/Nosotros/Nosotros";
import { FooterMio } from "./components/footer/Footer";
import { Galeria } from "./components/galleria/galleria";
import { Membresia } from "./components/membresia/Membresia";

function App() {
  return (
    <>
      <main>
        <div className="bg-[url('/public/vertFondo.webp')] bg-top bg-no-repeat bg-cover max-h-full lg:bg-[url('/public/horiFondo2.webp')]">
          <Header />
          <Inicio />
          <span>-</span>
        </div>
        <div className="my-24">
          <Nosotros />
        </div>
        <div className="my-32">
          <Galeria />
        </div>
        <div className="my-32">
          <Membresia />
        </div>
        <div className="mt-32">
          <FooterMio />
        </div>
      </main>
    </>
  );
}

export default App;

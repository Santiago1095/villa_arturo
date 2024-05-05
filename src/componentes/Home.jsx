import TitleOne from "./TitleOne";
import Carousels from "./Carousels";
import TitleTwo from "./TitleTwo";
import Abouts from "./Abouts";
import Data from "./Data";
import Contacto from "./Contacto";
import Footer from "./Footer";

const Home = () => {
  return (
    <div class="container-fluid">
      <TitleOne />
      <Carousels />
      <TitleTwo />
      <Abouts />
      <Data />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Home;
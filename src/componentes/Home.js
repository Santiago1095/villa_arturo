import TitleOne from "./TitleOne";
import Carousels from "./Carousels";
import TitleTwo from "./TitleTwo";
import Abouts from "./Abouts";
import Data from "./Data";

const Home = () => {
  return (
    <div className="container-fluid">
      <TitleOne />
      <Carousels />
      <TitleTwo />
      <Abouts />
      <Data />
    </div>
  );
};

export default Home;

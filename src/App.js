import "./App.css";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import AltCarousel from "./components/AltCarousel";

function App() {
  return (
    <div className="App mb-[183px]">
      <h2 className="invisible md:visible martel-sans-ud text-[#887C68] font-semibold text-[28px] mt-[183px]">
        COMMUNITIES WE MANAGE
      </h2>
      <h2 className="absolute top-[183px] left-0 right-0 visible md:invisible martel-sans-ud text-[#887C68] font-semibold text-[28px] ">
        COMMUNITIES <br />
        WE MANAGE
      </h2>
      <Card />
      <h2 className="mb-[63px] martel-sans-ud text-[#887C68] font-semibold text-[28px] mt-[183px]">
        OUR SERVICES
      </h2>
      <AltCarousel />
    </div>
  );
}

export default App;

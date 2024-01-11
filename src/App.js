import "./App.css";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Test from "./components/Test";

function App() {
  return (
    <div className="App mb-[183px]">
      <h2 className="martel-sans-ud text-[#887C68] font-semibold text-[28px] mt-[183px]">
        COMMUNITIES WE MANAGE
      </h2>
      <Card />
      <h2 className="mb-[63px] martel-sans-ud text-[#887C68] font-semibold text-[28px] mt-[183px]">
        OUR SERVICES
      </h2>
      <Test />
    </div>
  );
}

export default App;

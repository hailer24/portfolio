import "./App.css";
import Hero from "./components/hero";
import Info from "./components/info";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="app">
      <div className="spacing"></div>

      <Navbar />
      <Hero />
      <div className="spacing"></div>
      <div className="spacing"></div>
      <Info />
    </div>
  );
}

export default App;

import "./App.css";
import Hero from "./components/hero";
import Matrix from "./components/matrix";
import Navbar from "./components/navbar";
import Plus from "./components/plus";

function App() {
  return (
    <div className="app">
      <div className="spacing"></div>
      <Plus />
      <Matrix />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;

import "./App.css";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Info from "./components/info";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <div className="app">
      <div className="spacing sp-1"></div>

      <Navbar />
      <Hero />
      <div className="spacing"></div>
      <div className="spacing"></div>
      <Info />
      <Skills />
      <Projects />
      <div className="spacing"></div>
      <div className="spacing"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;

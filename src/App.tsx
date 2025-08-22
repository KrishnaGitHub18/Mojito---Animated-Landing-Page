import "./App.css";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import img from "../public/rootBG.jpg";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
      }}
    >
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
}

export default App;

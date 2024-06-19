import "./app.css";
import Navigation from "./components/Navigation";
import Home from "./section/Home";
import About from "./section/About";
import Project from "./section/Project";
import Contact from "./section/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-[#161c29] overflow-x-hidden text-white transition-all duration-300 font-[monospace]">
        <Navigation />
        <div className="global-container space-y-20">
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Project />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

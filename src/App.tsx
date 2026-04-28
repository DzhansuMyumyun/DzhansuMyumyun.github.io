import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Background } from "./components/Background";
import Footer from "./components/Footer";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Background>
      <main className="max-w-5xl mx-auto px-6">
        <Navbar/>
        <Hero />
        <About />
        <Projects />
        <Experience/>
        <Skills />
        <Contact />
      </main>
      <Footer/>

    </Background>
  );
}

export default App;
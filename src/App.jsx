
import Main from "./components/Main";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/smallComponents/Navbar";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#E8E8E3] text-gray-900 my-font">
      <Navbar />

      <main className="pt-20">
        <section id="home" >
          <Main />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        <section id="services" className="scroll-mt-20">
          <Services />
        </section>

        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
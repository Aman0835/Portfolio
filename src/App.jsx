import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Main from "./components/main";
import Resume from "./components/resume";

function App() {
  return (
    <div className="my-font text-gray-900 bg-[#E8E8E3] scroll-smooth">
      <Header />
      <div>
        <section id="home">
          <Main />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;

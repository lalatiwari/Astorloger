import Header from "./components/Header";
import Hero from "./components/Hero";
import PopupForm from "./components/PopupForm";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import OurProducts from "./components/OurProducts";
import Certificates from "./components/Certificates";

function App() {
  return (
    <>
      <Header />

      <section id="home">
        <Hero />
      </section>

      <PopupForm />

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="products">
        <OurProducts />
      </section>

      <section id="certificates">
        <Certificates />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default App;
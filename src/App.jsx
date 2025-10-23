import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technology from './components/Technology';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div className="relative z-0 min-h-screen font-sans bg-gray-900 text-gray-100">
    <div className="bg-cover bg-center">
      <Navbar />
      <section id="home" className="min-h-screen pt-20">
        <Hero />
      </section>
    </div>

    <main className="container mx-auto px-6 md:px-12">
      <section id="about" className="py-20">
        <About />
      </section>

      <section id="services" className="py-20">
        <Services />
      </section>

      <section id="technology" className="py-20">
        <Technology />
      </section>

      <section id="portfolio" className="py-20">
        <Portfolio />
      </section>

      <section id="contact" className="py-20">
        <Contact />
      </section>
    </main>
    <Footer />
  </div>
);

export default App;
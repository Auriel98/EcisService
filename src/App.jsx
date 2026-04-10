// src/App.jsx
import './styles/globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Competences />
        <Projets />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
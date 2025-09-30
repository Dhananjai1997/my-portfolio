import './App.css';
import Header from '../src/components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Qualification from './components/blog/Blog';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

function App() {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Blog />
      <Work />
      <Contact />
      
    </main>

    <Footer />
    <Scrollup />
    </>
  );
}

export default App;

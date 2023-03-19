
import './App.scss';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Testimonials from './container/Testimonials/Testimonials';
import Works from './container/Works/Works';
import About from './container/About/About';
import Skills from './container/Skills/Skills';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;

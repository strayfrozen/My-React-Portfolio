import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Contact from './components/Contact';



function App() {

  return (
    <div>
      <main>
        <Header />
        <AboutMe />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Project from './components/Project';








function App() {

  return (
    <div>
      <main>
        <Header />
        <AboutMe />
        <Contact />
        <Project />
        <Resume />

        
        <Footer />
      </main>
    </div>
  );
}

export default App;

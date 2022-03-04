import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';



function App() {

  return (
    <div>
      <main>
        <Header />
        <AboutMe />
        <Footer />
      </main>
    </div>
  );
}

export default App;

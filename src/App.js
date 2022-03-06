import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Project from './components/Project';

import{Switch,Route, Redirect, withRouter} from 'react-router-dom'






function App() {

  return (
    <div>
      <main>
        <Header />
        <AboutMe />

        <Route path="/about" component={AboutMe} />
        <Contact />
        <Project />
        <Resume />
        <Footer />
      </main>
    </div>
  );
}

export default App;

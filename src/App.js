import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Project from './components/Project';
import {BrowserRouter} from 'react-router-dom'

import{Switch,Route, Redirect, withRouter} from 'react-router-dom'



function App() {

  return (
    <div>
      <main>
        <BrowserRouter>
        <Header />
        
        <Switch>
        <Route path="/about" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Project} />
        <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default withRouter(App);

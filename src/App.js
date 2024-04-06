import './App.css';
import Logo from './Logo.jsx';
import HamburgerMenu from './HamburgerMenu.jsx';
import Introduction from './Introduction.jsx';
import AboutMe from './AboutMe.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className="App">
      <Logo />
      <HamburgerMenu />
      <Introduction />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

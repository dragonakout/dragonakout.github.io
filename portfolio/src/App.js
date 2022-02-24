import logo from './res/under-construction.svg';
import './App.css';
import AppBar from './appbars/AppBar'
import Footer from './appbars/Footer'
import About from './sections/about'
import Contact from './sections/contact'
import Projects from './sections/projects'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Under construction ! Come back later :)
        </p>

        <About/>
        <Projects/>
        <Contact/>
      </header>
      <Footer/>
    </div>
  );
}

/**
 * EXAMPLE LINK
 * 
 *         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 * 
 */

export default App;

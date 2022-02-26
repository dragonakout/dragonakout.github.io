import logo from './res/app_logo.svg';
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
        <p className='landingFont'>
          An elegant design rests on both simplicity and depth.
        </p>

        <About/>
        <Projects/>
        <Contact/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;

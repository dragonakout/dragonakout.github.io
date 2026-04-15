import logo from './res/app_logo.svg';
import './App.css';
import AppBar from './components/appbars/AppBar'
import Footer from './components/appbars/Footer'
import About from './about/about'
import Contact from './contact/contact'
import Projects from './projects/projects'
import Blog from './blog/blog'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p className='landingFont'>
          An elegant design rests on both simplicity and depth
        </p>

        <About />
        <Blog />
        <Projects />
        <Contact />
      </header>
      <Footer />
    </div>
  );
}

export default App;

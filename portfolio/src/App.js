import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppBar from './components/appbars/AppBar'
import Footer from './components/appbars/Footer'
import ScrollManager from './components/ScrollManager'
import NotFound from './components/NotFound'
import Home from './home/home'
import BlogList from './blog/BlogList'
import BlogPost from './blog/BlogPost'

// <BrowserRouter> watches the URL in the address bar and makes it available
// to every component inside it.
//
// <Routes> looks at the current URL and renders the FIRST <Route> whose
// `path` matches. Only that route's `element` is shown; the others are not.
//   "/"            -> the home page (logo, About, Blog preview, Projects, Contact)
//   "/blog"        -> the list of all blog posts
//   "/blog/:slug"  -> one post. ":slug" is a placeholder: "/blog/arctic-norway"
//                     matches and slug = "arctic-norway" (see BlogPost.js)
//   "*"            -> anything else: a "page not found" message
//
// The AppBar and Footer are outside <Routes>, so they show on every page.
function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="App">
        <header className="App-header">
          <AppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

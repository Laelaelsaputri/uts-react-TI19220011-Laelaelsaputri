import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';
import About from './pages/About';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-left">
          <img src="/Logo.png" alt="Logo" className="nav-logo" />
        </div>
        <div className="nav-right">
          <Link to="/">Home</Link>
          <Link to="/add">Add</Link>
          <Link to="/edit/1">Edit</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

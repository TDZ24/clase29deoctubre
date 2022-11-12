import Form from "./components/Form";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
export default function App() {
  return (

    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Router>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Restaurante</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="/" classNameName="nav-link">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" classNameName="nav-link">Acerca de</Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" classNameName="nav-link">Tablero</Link>
              </li>
              <li className="nav-item">
                <Link to="/form" classNameName="nav-link">PQRS</Link>
              </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>

          </Route>
          <Route path="/menu" element={<Menu />}>

          </Route>
          <Route path="/form" element={<Form />}>

          </Route>
        </Routes>
      </Router>
    </nav>
  );
}
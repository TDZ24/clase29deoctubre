import User from "./components/User";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
function App() {
  return (
    <div className="container">
      <Router>
        <Link to="/" className="btn btn-info mx-2 mt-3">Inicio</Link>
        <Link to="/about" className="btn btn-primary mx-2 mt-3">Acerca de</Link>
        <Link to="/dashboard" className="btn btn-primary mx-2 mt-3">Tablero</Link>
        <Link to="/user" className="btn btn-primary mx-2 mt-3">Usuario</Link>
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>

          </Route>
          <Route path="/dashboard" element={<Dashboard />}>

          </Route>
          <Route path="/user" element={<User />}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

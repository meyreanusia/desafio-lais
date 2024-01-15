import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
import Parceiros from "./pages/Parceiros";
import Transparencia from "./pages/Transparencia";
import CursoExpandido from "./pages/CursoExpandido";

const App = () => {
  const bodyStyle = {
    margin: 0,
    padding: 0,
    height:'100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <BrowserRouter>
      <div style={bodyStyle}>
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/curso/:id" element={<CursoExpandido />} />
        </Routes>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Inicio from "./views/Inicio";
import Clientes from "./views/clientes";
import './App.css';
import Categorias from "./views/categorias"
import Encabezado from "./components/encabezado/Encabezado";
import Producto from "./views/productos";
import Ventas from "./views/ventas";
import Compras from "./views/compras";
import Catalogo from "./views/CatalogoProductos";
import Estadisticas from "./views/Estadisticas";
import Dashboard from "./views/Dashboard";


const App = () => {
  return (
      <Router>
        //Contenedor principal con margen superior
      <main className="margen-superior-main">
      <Encabezado/>    
        <Routes>
         //Definicion de rutas
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/clientes" element={<Clientes/>} />
          <Route path="/productos" element={<Producto/>} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/compras" element={<Compras />} />
           <Route path="/CatalogoProductos" element={<Catalogo />} />
           <Route path="/estadisticas" element={<Estadisticas />} />
            <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
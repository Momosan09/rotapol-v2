import logo from './img/rotapol logo.png';
import { Link } from 'react-router-dom';


const Navbar = props => {
  return (
    <>
    <div className="nav">
    <section className="botonesNavSeccion">
    <div className="NavBarLeft">
    <img id="logoImg" alt="logo" src={logo} />
    </div>

    <div className="botonesNav">
    <Link className="boton activo"  to="/">Calcular 1</Link>
    <button className="boton">Calcular 2</button>
    </div>

    <div className="NavBarRight">
    <Link className="boton admin" to="/middle">Admin</Link>
    </div>

    </section>
    </div>

    </>
  );
};

export default Navbar;

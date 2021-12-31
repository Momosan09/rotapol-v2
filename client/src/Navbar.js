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
    <Link className="boton activo"  to="/">Cortinas de Tela</Link>
    <button className="boton">Sistemas</button>
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

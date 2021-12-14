import logo from './img/logo.png';
import { Link } from 'react-router-dom';


const Navbar = props => {
  return (
    <>
    <div class="nav">




    <section class="botonesNavSeccion">

    <div class="NavBarLeft">
    <img id="logoImg" src={logo} />
    </div>

    <div class="botonesNav">
    <Link className="boton activo"  to="/">Calcular 1</Link>
    <button class="boton">Calcular 2</button>
    </div>

    <div className="NavBarRight">
    <Link className="boton admin" to="/admin">Admin</Link>
    </div>

    </section>
    </div>

    </>
  );
};

export default Navbar;

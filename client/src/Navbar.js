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
    <button class="boton activo">Calcular 1</button>
    <button class="boton">Calcular 2</button>
    </div>

    <div className="NavBarRight">
    <Link className="boton admin" to="/admin">Admin</Link>
    {/*<button class="boton admin">Admin</button>*/}
    </div>

    </section>
    </div>

    </>
  );
};

export default Navbar;

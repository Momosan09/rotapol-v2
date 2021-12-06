import logo from './img/logo.png';

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

    <div class="NavBarRight">
    <button class="boton admin">Admin</button>
    </div>

    </section>
    </div>

    </>
  );
};

export default Navbar;

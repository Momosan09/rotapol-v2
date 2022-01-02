import Navbar from './Navbar';
import Footer from "./Footer"
import Form2Comprar from './Form2comprar';


const Step2 = props =>{

const { hayPresupuesto, modelo, cantTela, precTotal } = props;
return(

    <>
<Navbar/>
<h1>Datos y Extras</h1>

<Form2Comprar
    hayPresupuesto={hayPresupuesto}
    modelo={modelo}
    cantTela={cantTela}
    precTotal={precTotal}
    />


<Footer/>
</>
);
}
export default Step2;
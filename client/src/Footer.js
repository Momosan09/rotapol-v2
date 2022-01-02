import Form2Comprar from './Form2comprar';
/* import { Document, Page } from 'react-pdf' */
const Footer = props => {

  const { hayPresupuesto, modelo, cantTela, precTotal } = props;

  return (
    <>

    <section className="footersection1">
    <Form2Comprar
      hayPresupuesto={hayPresupuesto}
      modelo={modelo}
      cantTela={cantTela}
      precTotal={precTotal}
    />

    </section>

    <section className="footersection2">
    <h1>footer</h1>
    </section>

    </>
    );
};

export default Footer;

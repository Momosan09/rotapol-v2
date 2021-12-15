import Form2Comprar from './Form2comprar';
const Footer = props => {

  const { hayPresupuesto, modelo, cantTela, precTotal } = props;

  return (
    <>

    <section class="footersection1">
    <Form2Comprar
      hayPresupuesto={hayPresupuesto}
      modelo={modelo}
      cantTela={cantTela}
      precTotal={precTotal}
    />
    
    </section>

    <section class="footersection2">
    <h1>footer</h1>
    </section>
    </>
    );
};

export default Footer;


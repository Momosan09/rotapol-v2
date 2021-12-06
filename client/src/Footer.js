import Form2Comprar from './Form2comprar';
const Footer = props => {

  const { hayPresupuesto } = props;

  return (
    <>
    <br/>
    <section class="footersection1">
    <Form2Comprar hayPresupuesto={hayPresupuesto} />

    </section>
    <br/>
    <section class="footersection2">
    <h1>footer</h1>
    </section>
    </>
    );
};

export default Footer;
// <button class="section1boton">
//   Comprar
//   <Form2Comprar />
// </button>

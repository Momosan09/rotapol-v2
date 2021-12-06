const Form2comprar = props => {

    const { hayPresupuesto } = props;

    const handleSubmit = e => {
      e.preventDefault();
      console.log('enviando pedido');
    };


    return (
    <>
    <form hidden={hayPresupuesto ? false : true} onSubmit={handleSubmit}>
        <br/>
        <label>Nombre</label>
        <input type="text"  maxlength="20"/>
        <br/>

        <label>Apellido</label>
        <input type="text"  maxlength="20"/>
        <br/>

        <label>Email</label>
        <input type="text"  maxlength="30"/>

        <br/>

        <label>Telefono</label>
        <input type="number" min="1" maxlength="30"/>

        <br/>
        <button type="submit">Comprar</button>
    </form>
    </>
    );
};
export default Form2comprar;

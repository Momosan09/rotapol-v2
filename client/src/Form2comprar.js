const Form2comprar = props => {
    return (
    <>
    <form>
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
    </form>
    </>
    );
};
export default Form2comprar;
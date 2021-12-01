import Radios from './Radios';

const Form = props => {


  const handleSubmit = e => {
    e.preventDefault();
    console.log('calculando...');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Medida</label>
        <input type="number" min="1"/>
        <br/>
        <Radios />
        <label>Precio de un solo paño</label>
        <input type="number" min="1"/>
        <br/>
        <label>Precio de la tela</label>
        <input type="number"min="1"/>
        <br/>
        <button type="submit">Calcular</button>
        <button type="reset">Borrar</button>
      </form>
    </>
  );
};

export default Form;

import Radios from './Radios';

const Form = props => {


  const handleSubmit = e => {
    e.preventDefault();
    console.log('calculando...');
  };


  const {
    medida,
    precioTela,
    paño,
    modelo,
    setMedida,
    setPaño,
    setPrecioTela,
    setModelo } = props;

  const handleClick = () => {
    setMedida("");
    setPaño("");
    setPrecioTela("");    
  };

  return (
    <>
      <form className="FormLeft" onSubmit={handleSubmit}>
        <label>Medida</label>
        <input onChange={e => setMedida(e.target.value)} value={medida} type="number" min="1" className="TextLeftForm"/>
        <br/>
        <Radios setModelo={setModelo} modelo={modelo} />
        <br/>
        <label>Precio de un solo paño</label>
        <input onChange={e => setPaño(e.target.value)} value={paño} type="number" min="1" className="TextLeftForm"/>
        <br/>
        <label>Precio de la tela</label>
        <input onChange={e => setPrecioTela(e.target.value)} value={precioTela} type="number" min="1" className="TextLeftForm"/>
        <br/>
      </form>
    </>
  );
};

export default Form;

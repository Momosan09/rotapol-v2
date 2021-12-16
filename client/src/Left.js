import Form from './Form';

const Left = props => {

  const {
    medida,
    precioTela,
    paño,
    modelo,
    valor,
    setMedida,
    setPaño,
    setPrecioTela,
    setModelo,
    setValor
          } = props;

  return (
    <div className="Left">
      <h1>Left</h1>
      <Form
        medida={medida}
        modelo={modelo}
        paño={paño}
        precioTela={precioTela}
        setMedida={setMedida}
        setModelo={setModelo}
        setPaño={setPaño}
        setValor={setValor}
        setPrecioTela={setPrecioTela}
      />
    </div>
  );
};

export default Left;

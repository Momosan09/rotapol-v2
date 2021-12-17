import Form from './Form';

const Left = props => {

  const {
    medida,
    precioTela,
    paño,
    modelo,
    setMedida,
    setPaño,
    setPrecioTela,
    setModelo,
    setValor
          } = props;

  return (
    <div className="Left">
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

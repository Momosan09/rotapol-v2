import Table from './Table';

const Right = props => {

  const { medida, modelo, paño, precioTela, cantTela, precTotal } = props;

  return (
    <div className="Right">
      <h1>Right</h1>
      <Table
      cantTela={cantTela}
      modelo={modelo}
      medida={medida}
      paño={paño}
      precioTela={precioTela}
      precTotal={precTotal}
      />
    </div>
  );
};

export default Right;

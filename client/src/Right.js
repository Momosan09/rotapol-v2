import Table from './Table';

const Right = props => {

  const { medida,
          modelo,
          valor,
          paño,
          precioTela,
          cantTela,
          precTotal,
          } = props;

  return (
    <div className="Right">

      <Table
      cantTela={cantTela}
      modelo={modelo}
      medida={medida}
      valor={valor}
      paño={paño}
      precioTela={precioTela}
      precTotal={precTotal}
      />
    </div>
  );
};

export default Right;

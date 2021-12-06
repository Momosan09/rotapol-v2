import Table from './Table';

const Right = props => {

  const { medida, modelo, paño, precioTela } = props;

  return (
    <div className="Right">
      <h1>Right</h1>
      <p>Texto de relleno</p>
      <Table modelo={modelo} medida={medida} paño={paño} precioTela={precioTela}/>
    </div>
  );
};

export default Right;

const modelos = [
  'Americano 1', 'Presilla', 'Plisado', 'Americano 2',
  'Americano 1', 'Presilla', 'Plisado', 'Americano 2'
];

const Radios = props => {
  return (
    <div className="Radios">
      {modelos.map((modelo, i) => (
        <div key={i}>
          <label htmlFor="">{modelo}</label>
          <input type="radio" name="modelos"/>
        </div>
      ))}
    </div>
  );
};

export default Radios;

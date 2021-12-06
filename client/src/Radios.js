const modelos = [
  'Americano 1', 'Americano 2', 'Americano 2.5', 'Americano 3',
  'Plisado', 'Presilla', 'Vanesa', 'Vanesa doble'
];

const Radios = props => {

  const { modelo, setModelo } = props;

  const handleChange = e => {
    console.log(e.target.value);
    setModelo(e.target.value);
  };

  return (
    <div className="Radios">
      {modelos.map((m, i) => (
        <div key={i}>
          <label htmlFor="">{m}</label>
          <input
            onChange={handleChange}
            value={m}
            checked={modelo === m ? true : false}
            type="radio" name="modelos"/>
        </div>
      ))}
    </div>
  );
};

export default Radios;

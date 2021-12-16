// const modelos = [
//   'Americano 1', 'Americano 2', 'Americano 2.5', 'Americano 3',
//   'Plisado', 'Presilla', 'Vanesa', 'Vanesa doble'
// ];

const modelos = [
  { nombre: 'Americano 1', valor: 1 },
  { nombre: 'Americano 2', valor: 2 },
  
];

const Radios = props => {

  const { modelo,
          valor,
          setModelo,
          setValor
          } = props;



  const handleChange = e => {
    console.log(e.target.value);
    console.log(e.target.dataset.valor);
    setValor(e.target.dataset.valor)
    setModelo(e.target.value);
  };

  return (
    <div className="Radios">
      {modelos.map((m, i) => (
        <div key={i}>
          <label htmlFor="">{m.nombre}</label>
          <input
            onChange={handleChange}
            value={m.nombre}
            data-valor={m.valor}
            checked={modelo === m.nombre ? true : false}
            type="radio" name="modelos"/>
        </div>
      ))}
    </div>
  );
};

export default Radios;

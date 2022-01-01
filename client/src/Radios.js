const modelos = [
  { nombre: 'Americano 1.5 pellizcos', valor: 1.5 },
  { nombre: 'Americano 2 pellizcos', valor: 2 },
  { nombre: 'Americano 2.5 pellizcos', valor: 2.5 },
  { nombre: 'Americano 3 pellizcos', valor: 3 },
  { nombre: 'Plisado', valor: 2 },
  { nombre: 'Presilla', valor: 2 },
  { nombre: 'Vanesa', valor: 2 },
  { nombre: 'Vanesa Doble', valor: 2 },
  
  
];

const Radios = props => {

  const { modelo,
          setModelo,
          setValor
          } = props;



  const handleChange = e => {
    console.log("Name  = "+ e.target.value);
    console.log("Value = "+ e.target.dataset.valor);
    setValor(e.target.dataset.valor);
    setModelo(e.target.value);
  };

  return (
    <div className="Radios">
{/*           <label>Americano </label><select>
          <option>1 Pellizco</option>
          <option>2 Pellizcos</option>
          </select> */}
          <table className="TableModelos">
            <thead className="HeadTableModelos">
              <tr>
                <th>Modelos</th>
              </tr>
            </thead>
          <tbody className="BodyTableModelos">

      {modelos.map((m, i) => (
        <tr>
        <div key={i}>
          <td className="NombresModelos">
          <label htmlFor="">{m.nombre}</label>
          </td>
          <td className="InputsModelos">
          <input
            onChange={handleChange}
            value={m.nombre}
            data-valor={m.valor}
            checked={modelo === m.nombre ? true : false}
            type="radio" name="modelos"/>
            </td>
        </div>
        </tr>
))}
</tbody>
</table>

    </div>
  );
};

export default Radios;

const CantTela =null;
const ModeloE = null;
const CantPañ = null;
const Confecc = null;
const Total = null;

const Table = props => {

  const { medida, modelo, paño, precioTela} = props;


  return (
    <>
      <h1>Table</h1>
      <table>
        <tbody>
          <tr>
            <td class="LeftTable LT0">{(medida * 200) / 100 || 0} m2</td>
            <td class="RightTable">Cantidad de tela</td>
          </tr>
          <tr>
            <td class="LeftTable LT1">{ modelo || "None"}</td>
            <td class="RightTable">Modelo Elegido</td>
          </tr>
          <tr>
            <td class="LeftTable LT0">${paño|| 0} </td>
            <td class="RightTable">Cantidad de paños</td>
          </tr>
          <tr>
            <td class="LeftTable LT1">{precioTela||"$" + 0}</td>
            <td class="RightTable">Confeccion</td>
          </tr>
          <tr>
            <td class="LeftTable LT0">{ precioTela + medida || ""}</td>
            <td class="RightTable">Total</td>
          </tr>
        </tbody>
      </table>


      {/*<div className="divr co0"><p>resultado1</p></div>
      <div className="divr co1"><p>resultado2</p></div>
      <div className="divr co0"><p>resultado3</p></div>
      <div className="divr co1"><p>resultado4</p></div>
      <div className="divr co0"><p>resultado5</p></div>
      <div className="divr co1"><p>resultado6</p></div>*/}

    </>

  );
};

export default Table;

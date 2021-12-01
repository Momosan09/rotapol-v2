const CantTela =null;
const ModeloE = null;
const CantPañ = null;
const Confecc = null;
const Total = null;

const Table = props => {
  return (
    <>
      <h1>Table</h1>
      <table>
        <tbody>
          <tr>
            <td class="LeftTable LT0">{CantTela + "Mts"|| 0}</td>
            <td class="RightTable">Cantidad de tela</td>
          </tr>
          <tr>
            <td class="LeftTable LT1">{ModeloE || "None"}</td>
            <td class="RightTable">Modelo Elegido</td>
          </tr>
          <tr>
            <td class="LeftTable LT0">{CantPañ || 0}</td>
            <td class="RightTable">Cantidad de paños</td>
          </tr>
          <tr>
            <td class="LeftTable LT1">{Confecc||"$" + 0}</td>
            <td class="RightTable">Confeccion</td>
          </tr>
          <tr>
            <td class="LeftTable LT0">{"$" + Total||"$" + 0}</td>
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

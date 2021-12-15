// const CantTela =null;
// const ModeloE = null;
// const CantPañ = null;
// const Confecc = null;
// const Total = null;

const Table = props => {

  const { modelo, paño, precioTela, cantTela, precTotal } = props;


  return (
    <>
      <table>
        <tbody>
          <tr>
            <td className="LeftTable LT0">{cantTela || 0} m2</td>
            <td className="RightTable">Cantidad de tela</td>
          </tr>
          <tr>
            <td className="LeftTable LT1">{ modelo || "None"}</td>
            <td className="RightTable">Modelo Elegido</td>
          </tr>
          <tr>
            <td className="LeftTable LT0">${paño|| 0} </td>
            <td className="RightTable">Cantidad de paños</td>
          </tr>
          <tr>
            <td className="LeftTable LT1">{precioTela||"$" + 0}</td>
            <td className="RightTable">Confeccion</td>
          </tr>
          <tr>
            <td className="LeftTable LT0">{ precTotal|| ""}</td>
            <td className="RightTable">Total</td>
          </tr>
        </tbody>
      </table>


      {/*<div classNameName="divr co0"><p>resultado1</p></div>
      <div classNameName="divr co1"><p>resultado2</p></div>
      <div classNameName="divr co0"><p>resultado3</p></div>
      <div classNameName="divr co1"><p>resultado4</p></div>
      <div classNameName="divr co0"><p>resultado5</p></div>
      <div classNameName="divr co1"><p>resultado6</p></div>*/}

    </>

  );
};

export default Table;

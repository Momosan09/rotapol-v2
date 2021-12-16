// const CantTela =null;
// const ModeloE = null;
// const CantPañ = null;
// const Confecc = null;
// const Total = null;

const Table = props => {

  const { modelo,
          valor,
          paño,
          precioTela,
          cantTela,
          precTotal,
          } = props;


  return (
    <>
      <table>
        <tbody>
          <tr>
            <td className="LeftTable LT0">{cantTela * valor || 0} m2</td>
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
    </>

  );
};

export default Table;

import axios from 'axios';

let TelaTotal, 
    NumPanos,
    Confeccion,
    Total;

const Table = props => {

  const { modelo,
          medida,
          valor,
          paño,
          precioTela,
          cantTela,
          } = props;

let HayPresupuesto = false;

Math.ceil(NumPanos)
TelaTotal =cantTela * valor;
NumPanos = TelaTotal/ 1.5;
Confeccion = NumPanos /* NumPanos */ * paño; 
Total = (TelaTotal * precioTela) + Confeccion;

if(medida !== ""  && paño !== "" && precioTela !== "" && modelo !== ""  ){ 
HayPresupuesto = true
}



  return (
    <>
      <table className="RadiosTable">
        <tbody>
          <tr>
            <td className="LeftTable LT0">{TelaTotal.toFixed(2) || 0} m2</td>
            <td className="RightTable">Cantidad de tela</td>
          </tr>
          <tr>
            <td className="LeftTable LT1">{ modelo || "???????"}</td>
            <td className="RightTable">Modelo Elegido</td>
          </tr>
          <tr>
            <td className="LeftTable LT0">{"Redondeado = " + Math.ceil(NumPanos) + " Sin redondear " +NumPanos.toFixed(2)|| 0} </td>
            <td className="RightTable">Cantidad de paños</td>
          </tr>
          <tr>
            <td className="LeftTable LT1">${Confeccion.toFixed(2)||0}</td>
            <td className="RightTable">Confección</td>
          </tr>
          <tr>
            <td className="LeftTable LT0">${Total.toFixed(2) ||""}</td>
            <td className="RightTable">Total</td>
          </tr>
        </tbody>
      </table>
      <button className="ButtonNextStepTable" hidden={HayPresupuesto ? false : true}>Siguiente paso</button>

    </>

  );
};

export default Table;

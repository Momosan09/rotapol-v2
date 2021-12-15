import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const Admin = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, [])

 /*  let autorizado = false;
  let password = "asd"
  password = prompt('Ingrese contraseña');
  if (password == 'asd') autorizado=true;

  if (autorizado) */
  return (
    <>
      <Navbar />
      <h1>Admin</h1>
      <table>
        <thead className="cabezaadmin">
          <tr>
            {/* <th>Indice</th> */}
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Apelldio</th>
            <th>Telefono</th>
            <th>Mail</th>
            <th>Modelo</th>
            <th>cantidad de Tela</th>
            <th>Total</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          {orders.map(order => {
            let d = new Date(order.date);
            console.log(d);
            /*let i = i + 1;*/
            return (
            <tr>
              {/*<td>{i}</td>*/}
              <td className="F0">{d.toLocaleDateString('es-AR') || "null"}</td>
              <td className="F1">{order.name        || "null" }</td>
              <td className="F0">{order.lastName    || "null"}</td>
              <td className="F1">{order.phone       || "null"}</td>
              <td className="F0">{order.email       || "null"}</td>
              <td className="F1">{order.modelo      || "null"}</td>
              <td className="F0">{order.cantTela    || "null"}</td>
              <td className="F1">$ {order.precTotal || "null"}</td>
              <td className="F0"><input type="checkbox"/></td>





            </tr>
          )

        })}
        </tbody>
      </table>
      <Footer />
    </>
    
  );
  /* else return <div></div>; */
};
export default Admin;
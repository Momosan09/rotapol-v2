import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
const Admin = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, [])

  let autorizado = false;
  let password = "asd"
  password = prompt('Ingrese contraseña');
  if (password == 'asd') autorizado=true;

  if (autorizado)
  return (
    <>
      <Navbar />
      <h1>Admin</h1>
      <table>
        <thead>
          <tr>
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
            return (
            <tr>
              <td>{d.toLocaleDateString('es-AR')}</td>
              <td>{order.name}</td>
              <td>{order.lastName}</td>
              <td>{order.phone}</td>
              <td>{order.email}</td>
              <td>{order.modelo}</td>
              <td>{order.cantTela}</td>
              <td>$ {order.precTotal}</td>
              <td><input type="checkbox"/></td>





            </tr>
          )

        })}
        </tbody>
      </table>
    </>
  );
  else return <div></div>;
};
export default Admin;
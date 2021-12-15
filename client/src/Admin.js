import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const Admin = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(res => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  const handleCheckbox = e => {
    // console.log(e.target.value);
    let id = e.target.value;
    let entregado = e.target.checked;
    console.log(id, entregado);
    let data = { entregado };
    axios.put("/api/orders/"+id, data)
      .then(res => {
        console.log(res.data);
        let nuevasOrdenes = [];
        nuevasOrdenes = orders.map(orden => {
          if (orden._id === id)
            return res.data;
          else
            return orden;
        });
        setOrders(nuevasOrdenes);
      })
      .catch(err => console.log(err))
  };



 /*  let autorizado = false;
  let password = "asd"
  password = prompt('Ingrese contraseña');
  if (password == 'asd') autorizado=true;

  if (autorizado) */
  const estilo = { textDecoration: 'line-through' };

  return (
    <>
      <Navbar />
      <h1>Admin</h1>
      <table>
        <thead className="cabezaadmin">
          <tr>
            <th>#</th>
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
          {orders.map((order, i) => {
            let d = new Date(order.date);
            console.log(d);
            return (
            <tr key={order._id}>
              <td style={order.entregado ? estilo : null}>{i+1}</td>
              <td style={order.entregado ? estilo : null} className="F0">{d.toLocaleDateString('es-AR') || "null"}</td>
              <td style={order.entregado ? estilo : null} className="F1">{order.name        || "null" }</td>
              <td style={order.entregado ? estilo : null} className="F0">{order.lastName    || "null"}</td>
              <td style={order.entregado ? estilo : null} className="F1">{order.phone       || "null"}</td>
              <td style={order.entregado ? estilo : null} className="F0">{order.email       || "null"}</td>
              <td style={order.entregado ? estilo : null} className="F1">{order.modelo      || "null"}</td>
              <td style={order.entregado ? estilo : null} className="F0">{order.cantTela    || "null"}</td>
              <td style={order.entregado ? estilo : null} className="F1">$ {order.precTotal || "null"}</td>
              <td className="F0"><input checked={order.entregado} value={order._id} onChange={handleCheckbox} type="checkbox"/></td>



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

import { useEffect, useState } from 'react';
import Printer from "./img/printer.svg"
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

  const estilo = {
    textDecoration: 'line-through',
    color:"yellow"
/*     backgroundColor: "black" */

  }
;

  return (
    <>
      <Navbar />
      <h1>Admin</h1>
      <table className="TableAdmin">
        <thead>
          <tr className="TrAdminTable">
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
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => {
            let d = new Date(order.date);
            console.log(d);
            return (
              <tr  style={order.entregado ? estilo : null} key={order._id}>
              <td className="AdminIndex">{i+1}</td>
              <td className="F0">{d.toLocaleDateString('es-AR') || "null"}</td>
              <td className="F1">{order.name        || "null" }</td>
              <td className="F0">{order.lastName    || "null"}</td>
              <td className="F1">{order.phone       || "null"}</td>
              <td className="F0">{order.email       || "null"}</td>
              <td className="F1">{order.modelo      || "null"}</td>
              <td className="F0">{order.cantTela    || "null"}</td>
              <td className="F1">$ {order.precTotal || "null"}</td>
              <td className="F0"><input checked={order.entregado} value={order._id} onChange={handleCheckbox} type="checkbox"/></td>
              <td><a href={"/admin/" + order._id}>
                <img id="Printer" alt="logo" src={Printer} href={"/admin/" + order._id} title="Detalles e Impresion" />
                
                </a></td>
            </tr>
          )
        })}
        </tbody>
      </table>
      <Footer />
    </>

);
};
export default Admin;

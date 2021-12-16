import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios"

const Detalles = props => {
  const params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("/api/orders/" + params.id)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  const print = () => {
    document.getElementById('print').hidden = true;
    document.getElementById('volver').hidden = true;

    window.print();
    document.getElementById('print').hidden = false;
    document.getElementById('volver').hidden = false;

  };
console.log(data.entregado);
  return (
    <>
    <h1>Cliente {params.id}</h1>
    <h2>Nombre: {data.name} {data.lastName}</h2>
    <h2>Telefono: {data.phone}</h2>
    <h2>Total: {data.precTotal}</h2>
    <h1>Estado: {data.entregado ? 'Entregado' : 'No Entregado'}</h1>
    <button id="print" onClick={print}>Imprimir</button>
    <a id="volver" href={"/admin"}>Volver</a>
    </>
  );
};

export default Detalles;

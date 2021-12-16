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

  return (
    <>
    <h1>Cliente {params.id}</h1>
    <h2>Nombre: {data.name} {data.lastName}</h2>
    <h2>Telefono: {data.phone}</h2>
    <h2>Total: {data.precTotal}</h2>
    <button onClick={() => window.print()}>Imprimir</button>
    </>
  );
};

export default Detalles;

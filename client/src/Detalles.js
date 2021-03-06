import { useParams } from 'react-router-dom';
import logo from './img/rotapol logo.png';
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
    <section className="DetallesSection">
    <h1>Cliente {params.id}</h1>
    <div className="DetallesLogo">
    <img id="logoImgDetalles" alt="logo" src={logo} />
    <h2 className="ClientName">{data.name} {data.lastName}</h2>
    </div>
    <div className="DetallesElement1">
    </div>
    
    <h2>Telefono: {data.phone}</h2>
    <h2>Total: {data.precTotal}</h2>
    <h1>Estado: {data.entregado ? 'Entregado' : 'No Entregado'}</h1>
    <button id="print" onClick={print}>Imprimir</button>
    <a id="volver" href={"/admin"}>Volver</a>
    </section>
    </>
  );
};

export default Detalles;

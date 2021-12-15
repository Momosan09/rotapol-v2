import { useState, useEffect } from 'react';
// import axios from 'axios';
import Navbar from './Navbar';
import Left from './Left';
import Right from './Right';
import Footer from './Footer';

const App = () => {

  const [medida, setMedida] = useState(''); // hook de estado
  const [modelo, setModelo] = useState(''); // hook de estado
  const [paño, setPaño] = useState(''); // hook de estado
  const [precioTela, setPrecioTela] = useState(''); // hook de estado
  const [hayPresupuesto, setHayPresupuesto] = useState(false); // hook de estado
  const [cantTela, setCantTela] = useState(0);
  const [precTotal, setPrecTotal] =useState(0);



  // useEffect(() => {
  //   axios.get('/api/orders')
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err));
  // }, []);
  useEffect(() => {
    setCantTela(medida / 100);
  }, [medida])

  useEffect(()=>{
    setPrecTotal( parseInt(precioTela) + parseInt(medida) );
  }, [precioTela, medida])

  useEffect(() => {
    if (medida > 0 && modelo !== '' && paño > 0 && precioTela > 0)
      setHayPresupuesto(true);
    else
      setHayPresupuesto(false);

  }, [medida, modelo, paño, precioTela])

  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <Left
          medida={medida}
          modelo={modelo}
          paño={paño}
          precioTela={precioTela}
          setMedida={setMedida}
          setModelo={setModelo}
          setPaño={setPaño}
          setPrecioTela={setPrecioTela}
        />
        <Right
          medida={medida}
          modelo={modelo}
          paño={paño}
          precioTela={precioTela}
          cantTela={cantTela}
          precTotal={precTotal}
        />
      </div>
      <Footer
        hayPresupuesto={hayPresupuesto}
        modelo={modelo}
        cantTela={cantTela}
        precTotal={precTotal}
      />
    </div>
  );
};

export default App;

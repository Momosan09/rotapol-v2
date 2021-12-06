import { useState, useEffect } from 'react';
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
        <Right medida={medida} modelo={modelo} paño={paño} precioTela={precioTela} />
      </div>
      <Footer hayPresupuesto={hayPresupuesto} />
    </div>
  );
};

export default App;

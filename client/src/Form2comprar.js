import axios from 'axios';
import { useState } from 'react';
const Form2comprar = props => {

    const { hayPresupuesto, modelo, cantTela, precTotal } = props;

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');




    const handleSubmit = e => {
      e.preventDefault();
      console.log('enviando pedido');
      const data = {
        modelo: modelo,
        name: name,
        lastName: lastName,
        phone: phone,
        email: email,
        cantTela: cantTela,
        precTotal: precTotal,
      };
      console.log(data);
      axios.post('/api/orders', data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    };


    return (
    <>
    <form hidden={hayPresupuesto ? false : true} onSubmit={handleSubmit}>
        <br/>
        <label>Nombre</label>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          maxlength="20"
        />
        <br/>

        <label>Apellido</label>
        <input
         value={lastName}
          onChange={e => setLastName(e.target.value)}
         type="text"
         maxlength="20"/>
        <br/>

        <label>Email</label>
        <input
         value={email}
         onChange={e => setEmail(e.target.value)}
         type="text"
         maxlength="30"/>

        <br/>

        <label>Telefono</label>
        <input
         value={phone}
         onChange={e => setPhone(e.target.value)}
         type="number"
         min="1"
         maxlength="30"/>

        <br/>
        <button type="submit">Comprar</button>
    </form>
    </>
    );
};
export default Form2comprar;

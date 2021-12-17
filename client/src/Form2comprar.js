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
    <table>
      <tbody>
        <tr>
          <td>
          <label>Nombre</label>
          </td>
          <td>
          <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          maxLength="20"
          required
          autofocus
        />
          </td>
        </tr>
        <tr>
        <td>
          <label>Apellido</label>
          </td>
          <td>
          <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          type="text"
          maxLength="20"
          required
          autofocus
          />
          </td>
        </tr>
        <tr>
          <td>
        <label>Email</label>
          </td>
          <td>
          <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        maxLength="20"
        autofocus
        />
        </td>
        </tr>
        <tr>
          <td>
          <label>Telefono</label>
          </td>
          <td>
          <input
        value={phone}
        onChange={e => setPhone(e.target.value)}
        type="text"
        minLength="8"
        maxLength="8"
        required
        autofocus
        />
          </td>
        </tr>
        <tr>
          <td>
        <button type="submit">Comprar</button> {/* <button type="reset">Reset</button> */}
          </td>
        </tr>
      </tbody>
    </table>
  </form>
    </>
    );
};
export default Form2comprar;

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
      alert("Pedido Enviado");
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
  <form /* hidden={hayPresupuesto ? false : true}  */onSubmit={handleSubmit}>
    
    <table>
      <tbody>
        <tr>
          <td>
          <label>Nombre
            <sup className="SupTagRequiered">*</sup></label>
          </td>
          <td>
          <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          maxLength="20"
          required
          placeholder="####################"
          autofocus
        />
          </td>
        </tr>
        <tr>
        <td>
          <label>Apellido<sup className="SupTagRequiered">*</sup></label>
          </td>
          <td>
          <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          type="text"
          maxLength="20"
          required
          placeholder="####################"
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
        placeholder="Rotapol@hotmail.com"
        autofocus
        />
        </td>
        </tr>
        <tr>
          <td>
          <label>Telefono<sup className="SupTagRequiered">*</sup></label>
          </td>
          <td>
          <input
        value={phone}
        onChange={e => setPhone(e.target.value)}
        type="tel"
        pattern="[0-9]{4}[0-9]{4}" /*[0-9] valores aceptados */ /* {4} cantidad de digitos */ /* Si pusiera en el medio un "-" seria obligatorio ponerlo */
        placeholder="00000000"
        required
        autofocus
        />
          </td>
        </tr>
        <tr>
          <td>
        <button className="PurchaseButton"  type="submit" onclick="deactivatefunc()" id="desactivator">Comprar</button> {/* <button type="reset">Reset</button> */}
        <div class="tooltip ">(?)
  <span class="tooltiptext">El asterisco ("*") marca los campos que deben ser rellenados</span>
</div>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
    </>
    );
};
export default Form2comprar;

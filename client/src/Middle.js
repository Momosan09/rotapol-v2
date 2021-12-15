import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const passwordCorrecta = '1234';

const Middle = () => {
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (password === passwordCorrecta)
      navigate('/admin');
    else
      navigate('/');
  }
  return (
      <div className="middleForm">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={password}
          id="pass"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
// let Pass = document.getElementById("pass");
// console.log(Pass);
// if(Pass === 1234) console.log("Correcto")


export default Middle;

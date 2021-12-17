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
      <div className="MiddleForm">
      <div className="MiddleStyle">
      <h1 className="PasswordH1">Login</h1>
      <form onSubmit={handleSubmit}>
        <input className="PasswordInput"
          value={password}
          id="pass"
          type="password"
          onChange={e => setPassword(e.target.value)}
          />
          <div>
        <button type="submit">Entrar</button>
          </div>
      </form>
    </div>
  </div>
  );
}
export default Middle;
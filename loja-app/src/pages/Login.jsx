import { useContext, useState } from 'react';
import { LojaContext } from '../contexts/LojaContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(LojaContext);
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nome.trim()) {
      login(nome);
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;

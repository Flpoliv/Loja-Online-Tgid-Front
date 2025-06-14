import { useEffect, useRef, useContext } from 'react';
import { LojaContext } from '../contexts/LojaContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useContext(LojaContext);
  const navigate = useNavigate();
  const hasLoggedOut = useRef(false); // <-- evita loop infinito

  useEffect(() => {
    if (!hasLoggedOut.current) {
      logout();
      hasLoggedOut.current = true;

      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  }, [logout, navigate]);

  return <div className="p-4 text-gray-600">Saindo...</div>;
};

export default Logout;

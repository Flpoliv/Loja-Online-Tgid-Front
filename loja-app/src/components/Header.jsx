import { useCarrinho } from "../contexts/CarrinhoContext";
import { useContext } from "react";
import { LojaContext } from "../contexts/LojaContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { usuario, saldo } = useContext(LojaContext);
  const { carrinho } = useCarrinho();

  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0); 



  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-blue-700">
        <Link to="/">🛍 Loja Online</Link>
      </h1>

        {usuario && (
          <div className="flex flex-wrap gap-4 items-center">
        <span className="text-gray-700">
          Olá, <strong>{usuario.nome}</strong>
        </span>


          <span className="text-green-600 font-semibold">
            Saldo: R$ {typeof saldo === "number" ? saldo.toFixed(2) : "Erro: Saldo inválido"}
          </span>

          <span className="text-blue-600">
            Carrinho: {totalItens} item{totalItens !== 1 ? "s" : ""}
          </span>
          <Link
            to="/carrinho"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Ver Carrinho
          </Link>
          <Link
            to="/logout"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

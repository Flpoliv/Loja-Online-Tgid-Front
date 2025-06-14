import { useContext } from 'react';
import { LojaContext } from '../contexts/LojaContext';
import { useNavigate } from 'react-router-dom';

const CardProduto = ({ produto }) => {
  const { saldo, adicionarAoCarrinho } = useContext(LojaContext);
  const podeComprar = saldo >= produto.preco;
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center transition hover:shadow-xl">
      <img
        src={require(`../images/${produto.imagem}`)}
        alt={produto.nome}
        className="w-32 h-32 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{produto.nome}</h3>
      <p className="text-gray-500 text-sm mb-2">{produto.descricao}</p>
      <strong className="text-green-600 mb-4">R$ {produto.preco.toFixed(2)}</strong>

      <div className="flex flex-col gap-2 w-full">
        <button
          onClick={() => adicionarAoCarrinho(produto)}
          disabled={!podeComprar}
          className={`w-full px-4 py-2 rounded-full text-white font-semibold transition ${
            podeComprar
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {podeComprar ? 'Comprar' : 'Saldo insuficiente'}
        </button>

        <button
          onClick={() => navigate(`/produto/${produto.id}`)}
          className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};
console.log("Carrinho atual:", carrinho);

export default CardProduto;



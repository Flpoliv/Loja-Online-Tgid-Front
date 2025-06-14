import { useContext } from 'react';
import { LojaContext } from '../contexts/LojaContext';

const CardProduto = ({ produto }) => {
  const { adicionarAoCarrinho } = useContext(LojaContext);

  return (
    <div className="bg-white p-4 shadow rounded flex flex-col items-center text-center">
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-bold">{produto.nome}</h3>
      <p className="text-gray-600">{produto.descricao}</p>
      <p className="text-green-600 font-semibold">R$ {produto.preco.toFixed(2)}</p>
      <button
        onClick={() => adicionarAoCarrinho(produto)}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Comprar
      </button>
    </div>
  );
};

export default CardProduto;

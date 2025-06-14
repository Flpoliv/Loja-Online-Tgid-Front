import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCarrinho } from "../contexts/CarrinhoContext";

const ProdutoDetalhe = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const { adicionar } = useCarrinho();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/produtos/${id}`)
      .then((res) => res.json())
      .then((data) => setProduto(data));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  let imagemSrc;
  try {
    imagemSrc = require(`../images/${produto.imagem}`);
  } catch {
    imagemSrc = "https://via.placeholder.com/300";
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-600 underline">
        ← Voltar
      </button>
      <img src={imagemSrc} alt={produto.nome} className="w-full h-64 object-cover rounded mb-4" />
      <h2 className="text-2xl font-bold mb-2">{produto.nome}</h2>
      <p className="text-gray-600 mb-4">{produto.descricao}</p>
      <p className="text-lg font-semibold mb-4">R$ {produto.preco.toFixed(2)}</p>
      <button
      onClick={() => adicionar(produto)}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Adicionar ao Carrinho
    </button>

    </div>
  );
};

export default ProdutoDetalhe;

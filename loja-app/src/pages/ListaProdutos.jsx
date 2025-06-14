import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCarrinho } from "../contexts/CarrinhoContext";

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const { adicionar } = useCarrinho();

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then(setProdutos);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {produtos.map((p) => (
        <div key={p.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
          <img
            src={require(`../images/${p.imagem}`)}
            alt={p.nome}
            className="w-full h-40 object-cover rounded mb-2"
          />
          <h2 className="text-lg font-semibold">{p.nome}</h2>
          <p className="text-gray-600">R$ {p.preco.toFixed(2)}</p>

          <div className="flex gap-2 mt-2">
            <Link
              to={`/produto/${p.id}`}
              className="text-blue-600 hover:underline text-sm"
            >
              Ver detalhes
            </Link>
              <button
              onClick={() => adicionar(p)}
              className="bg-green-600 hover:bg-green-700 text-white text-sm px-2 py-1 rounded"
            >
              Comprar
            </button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaProdutos;

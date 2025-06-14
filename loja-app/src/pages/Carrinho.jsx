import { useCarrinho } from "../contexts/CarrinhoContext";
import { useContext } from "react";
import { LojaContext } from "../contexts/LojaContext";
import { toast } from "react-toastify";

const Carrinho = () => {
  const { carrinho, adicionar, diminuir, remover, limparCarrinho } = useCarrinho();
  const { saldo, atualizarSaldo } = useContext(LojaContext); // ✅ Corrigido aqui

  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0);

  const finalizarCompra = () => {
    if (total > saldo) {
      toast.error("Saldo insuficiente!");
      return;
    }

    atualizarSaldo(saldo - total);
    limparCarrinho();
    toast.success("Compra realizada com sucesso!");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Seu Carrinho</h2>

      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div>
          {carrinho.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={require(`../images/${item.imagem}`)}
                  alt={item.nome}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.nome}</h3>
                  <p className="text-gray-600">
                    R$ {item.preco.toFixed(2)} x {item.quantidade}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => diminuir(item)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <button
                      onClick={() => adicionar(item)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => remover(item.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-bold">Total: R$ {total.toFixed(2)}</p>
            <button
              onClick={finalizarCompra}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrinho;

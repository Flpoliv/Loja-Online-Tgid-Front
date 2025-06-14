import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export const useCarrinho = () => useContext(CarrinhoContext);

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionar = (produto) => {
    setCarrinho((prev) => {
      const existe = prev.find((p) => p.id === produto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === produto.id
            ? { ...p, quantidade: p.quantidade + 1 }
            : p
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  const remover = (id) => {
    setCarrinho((prev) => prev.filter((p) => p.id !== id));
  };

  const diminuir = (produto) => {
    setCarrinho((prev) =>
      prev
        .map((p) =>
          p.id === produto.id
            ? { ...p, quantidade: p.quantidade - 1 }
            : p
        )
        .filter((p) => p.quantidade > 0)
    );
  };

  const limparCarrinho = () => setCarrinho([]);

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionar, remover, diminuir, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

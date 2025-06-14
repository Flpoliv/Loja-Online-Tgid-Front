import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const LojaContext = createContext();

export const LojaProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [saldo, setSaldo] = useState(10000);
  const [carrinho, setCarrinho] = useState([]);

  const login = (nome) => {
    setUsuario({ nome });
    toast.success(`Bem-vindo, ${nome}!`);
  };


  const logout = () => {
    const totalRestaurado = carrinho.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    );
    setSaldo((prev) => prev + totalRestaurado);
    setUsuario(null);
    setCarrinho([]);
    toast.info('Logout realizado com sucesso.');
  };

  const atualizarSaldo = (novoSaldo) => {
    setSaldo(novoSaldo);
  };

  const adicionarAoCarrinho = (produto) => {
    if (saldo < produto.preco) {
      toast.error('Saldo insuficiente!');
      return;
    }

    setCarrinho((prev) => {
      const existente = prev.find((p) => p.id === produto.id);
      if (existente) {
        return prev.map((p) =>
          p.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });

    setSaldo((prev) => prev - produto.preco);
    toast.success(`Adicionado: ${produto.nome}`);
  };

  const removerDoCarrinho = (produto) => {
    setCarrinho((prev) => prev.filter((p) => p.id !== produto.id));
    setSaldo((prev) => prev + produto.preco * produto.quantidade);
    toast.info(`Removido: ${produto.nome}`);
  };

  const diminuirQuantidade = (produto) => {
    setCarrinho((prev) =>
      prev
        .map((p) =>
          p.id === produto.id ? { ...p, quantidade: p.quantidade - 1 } : p
        )
        .filter((p) => p.quantidade > 0)
    );
    setSaldo((prev) => prev + produto.preco);
    toast.info(`Reduzido: ${produto.nome}`);
  };

  const finalizarCompra = () => {
    if (carrinho.length === 0) {
      toast.error('Carrinho vazio!');
      return;
    }
    setCarrinho([]);
    toast.success('Compra finalizada com sucesso!');
  };

  return (
    <LojaContext.Provider
      value={{
        usuario,
        setUsuario,
        saldo,
        login,
        logout,
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        diminuirQuantidade,
        finalizarCompra,
        atualizarSaldo, // ← ADICIONE AQUI
      }}
    >
      {children}
    </LojaContext.Provider>
  );
};

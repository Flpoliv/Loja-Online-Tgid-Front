import { LojaProvider } from "./contexts/LojaContext";

<LojaProvider>
  <CarrinhoProvider>
    <Router>
      <Header />
      <main className="max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<ListaProdutos />} />
          <Route path="/produto/:id" element={<ProdutoDetalhe />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </main>
    </Router>
  </CarrinhoProvider>
</LojaProvider>

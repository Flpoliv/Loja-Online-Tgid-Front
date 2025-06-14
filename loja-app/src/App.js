import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LojaProvider } from "./contexts/LojaContext";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";

import ListaProdutos from "./pages/ListaProdutos";
import ProdutoDetalhe from "./pages/ProdutoDetalhe";
import Carrinho from "./pages/Carrinho";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <LojaProvider>
    <Router>
      <CarrinhoProvider>
        <Header />
        <main className="max-w-6xl mx-auto">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />

            <Route
              path="/"
              element={
                <PrivateRoute>
                  <ListaProdutos />
                </PrivateRoute>
              }
            />
            <Route
              path="/produto/:id"
              element={
                <PrivateRoute>
                  <ProdutoDetalhe />
                </PrivateRoute>
              }
            />
            <Route
              path="/carrinho"
              element={
                <PrivateRoute>
                  <Carrinho />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <ToastContainer position="top-right" autoClose={3000} />
      </CarrinhoProvider>
    </Router>
  </LojaProvider>
);

export default App;

import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import CardParceiro from "../../components/CardParceiro/index.jsx";
import "./Parceiros.scss";
export default function Parceiros() {
  const [parceiros, setParceiros] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [totalResultados, setTotalResultados] = useState(0);
  const [contador, setContador] = useState(6);

  useEffect(() => {
    handleBuscarModulos(1);
  }, []);

  const handleBuscarModulos = async (pagina) => {
    const response = await fetch(
      `http://0.0.0.0:3004/parceiros?_page=${pagina}&_limit=6`
    );
    const totalCount = response.headers.get("X-Total-Count");
    setTotalResultados(totalCount)
    const data = await response.json();
    setParceiros(data);
    const totalPages = Math.ceil(totalCount / 6);
    setTotalPaginas(totalPages);
    return data.length;
  };
  const renderizarCursos = () => {
    return parceiros.map((parceiro) => (
      <CardParceiro key={parceiro.id} parceiro={parceiro} />
    ));
  };

  const handlePaginaAnterior = async () => {
    const novaPagina = Math.max(paginaAtual - 1, 1);
    setPaginaAtual(novaPagina);
    const resultado = await handleBuscarModulos(novaPagina);
    setContador((prevContador) => prevContador - resultado)
  };

  const handlePaginaProxima = async () => {
    const novaPagina = Math.min(paginaAtual + 1, totalPaginas);
    setPaginaAtual(novaPagina);
    const resultado = await handleBuscarModulos(novaPagina);
    setContador((prevContador) => prevContador + resultado)
  };

  const handlePaginaAtual = (page) => {
    const valor = page.target.innerText;
    setPaginaAtual(valor);
    console.log(valor);
    handleBuscarModulos( valor);
  };
  return (
    <div className="parceirosPage">
      <div className="containerParceiros">
        <div className="container-btt">
          <p>
            Início<strong>/ Parceiros</strong>
          </p>
          <h1>Nossos Parceiros</h1>
        </div>
        <div className="containerResultato">
          <small className="totalResultados">{contador} de {totalResultados} resultados</small>

        </div>

        <div className="containerParceirosConteudo">{renderizarCursos()}</div>
        <Pagination className="paginacao">
          <Pagination.Prev onClick={handlePaginaAnterior} />
          {[...Array(totalPaginas).keys()].map((page) => (
            <Pagination.Item
              key={page + 1}
              active={page + 1 === paginaAtual}
              onClick={handlePaginaAtual}
            >
              {page + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={handlePaginaProxima} />
        </Pagination>
      </div>
    </div>
  );
}

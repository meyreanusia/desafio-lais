import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Cursos.scss";
import CardCurso from "../../components/CardCurso/index.jsx";
import Pagination from "react-bootstrap/Pagination";

export default function Cursos() {
  const [cursosCategoria, setCursosCategoria] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Covid 19");
  const [totalResultados, setTotalResultados] = useState(0);
  const [contador, setContador] = useState(6);
  useEffect(() => {
    handleBuscarModulos("Covid 19", 1);
  }, []);

  const handleBuscarModulos = async (categoria, pagina) => {
    const response = await fetch(
      `http://0.0.0.0:3004/cursos?cateroria=${categoria}&_page=${pagina}&_limit=6`
    );
    const totalCount = response.headers.get("X-Total-Count");
    setTotalResultados(totalCount);
    const data = await response.json();
    const totalPages = Math.ceil(totalCount / 6);
    setCursosCategoria(data);
    setTotalPaginas(totalPages);
    return data.length;
  };
  const renderizarCursos = () => {
    return cursosCategoria.map((curso) => (
      <CardCurso
        id={curso.id}
        key={curso.id}
        titulo={curso.titulo}
        parceiros={curso.parceiros}
        matriculados={curso.matriculados}
        sobre={curso.sobre}
        capa={curso.capa}
        duracao={curso.duracao}
        avaliacao={curso.avaliacao}
      />
    ));
  };

  const handleClickCategoria = async (categoria) => {
    setCursosCategoria([]);
    setPaginaAtual(1);
    setCategoriaSelecionada(categoria);
    const resultado = await handleBuscarModulos(categoria);
    setContador(resultado)
  };

  const handlePaginaAnterior = async (event) => {
    const novaPagina = Math.max(paginaAtual - 1, 1);
    setPaginaAtual(novaPagina);
    const resultado = await handleBuscarModulos(categoriaSelecionada, novaPagina, event);
    setContador((prevContador) => prevContador - resultado);
  };

  const handlePaginaProxima = async (event) => {
    const novaPagina = Math.min(paginaAtual + 1, totalPaginas);
    setPaginaAtual(novaPagina);

    const resultado = await handleBuscarModulos(categoriaSelecionada, novaPagina, event);
    setContador((prevContador) => prevContador + resultado);

  };
  const handlePaginaAtual = (page) => {
    const valor = page.target.innerText;
    setPaginaAtual(valor);
    handleBuscarModulos(categoriaSelecionada, valor);
  };
  return (
    <div className="cursos">
      <div className="container-btt">
        <p>
          Início/ Cursos/<strong> Módulos</strong>
        </p>
        <h1>Módulos Educacionais</h1>
      </div>
      <div className="navLink">
        <NavLink onClick={() => handleClickCategoria("Covid 19")}>
          Covid 19
        </NavLink>
        <NavLink onClick={() => handleClickCategoria("Síflis e outras ist")}>
          Sífilis e outras Ist’s{" "}
        </NavLink>
        <NavLink onClick={() => handleClickCategoria("Preceptoria")}></NavLink>
        <NavLink onClick={() => handleClickCategoria("Doenças raras")}>
          Doenças raras
        </NavLink>
        <NavLink onClick={() => handleClickCategoria("WebPalestras")}>
          Web Palestras
        </NavLink>
        <NavLink onClick={() => handleClickCategoria("Sistema prisional")}>
          Sistemas prisional
        </NavLink>
        <NavLink onClick={() => handleClickCategoria("OPAS")}>OPAS</NavLink>
      </div>
      <div className="containerResultato">
      <small className="totalResultados">
        {contador} de {totalResultados} resultados
      </small>
      </div>
      

      <div className="containerCursos">{renderizarCursos()}</div>
      <Pagination className="paginacao">
        <Pagination.Prev
          onClick={handlePaginaAnterior}
          className="paginaAnterior"
        />
        {[...Array(totalPaginas).keys()].map((page) => (
          <Pagination.Item
            key={page + 1}
            active={page + 1 === paginaAtual}
            onClick={handlePaginaAtual}
          >
            {page + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={handlePaginaProxima}
          className="paginaProxima"
        />
      </Pagination>
    </div>
  );
}

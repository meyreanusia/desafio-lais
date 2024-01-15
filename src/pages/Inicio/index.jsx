import Parceiros from "../../components/Parceiros";
import "./Inicio.scss";
import useApiCursos from "../../service/useApiCursos.js";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import CardCursoPrincipais from "../../components/CardCursoPrincipais/index.jsx";
import { NavLink, Link } from "react-router-dom";

export default function Inicio() {
  const { handleBuscarModulos, modulos } = useApiCursos();
  const [popular, setPopular] = useState([]);
  const [bemAvaliado, setBemAvaliado] = useState([]);
  const [recente, setRecente] = useState([]);
  const [pagina, setPagina] = useState("maisPopular");

  useEffect(() => {
    const fetchData = async () => {
      await handleBuscarModulos();
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (modulos.length > 0) {
      const cursosOrdenados = [...modulos].sort(
        (a, b) => b.matriculados - a.matriculados
      );
      const tresCursosPopulares = cursosOrdenados.slice(0, 3);
      setPopular(tresCursosPopulares);
    }
  }, [modulos]);

  useEffect(() => {
    if (modulos.length > 0) {
      const cursosOrdenados = [...modulos].sort(
        (a, b) => b.avaliacao - a.avaliacao
      );
      const tresCursosAvaliado = cursosOrdenados.slice(0, 3);
      setBemAvaliado(tresCursosAvaliado);
    }
  }, [modulos]);
  useEffect(() => {
    if (modulos.length > 0) {
      const cursosOrdenados = [...modulos].sort(
        (a, b) => b.criado_em - a.criado_em
      );
      const tresCursosRecentes = cursosOrdenados.slice(0, 3);
      setRecente(tresCursosRecentes);
    }
  }, [modulos]);

  const renderizarCursos = () => {
    switch (pagina) {
      case "maisPopular":
        return popular.map((curso) => (
          <CardCursoPrincipais
            key={curso.id}
            titulo={curso.titulo}
            parceiros={curso.parceiros}
            capa={curso.capa}
            matriculados={curso.matriculados}
            duracao={curso.duracao}
            avaliacao={curso.avaliacao}
          />
        ));
      case "maisBemAvaliado":
        return bemAvaliado.map((curso) => (
          <CardCursoPrincipais
            key={curso.id}
            titulo={curso.titulo}
            parceiros={curso.parceiros}
            capa={curso.capa}
            matriculados={curso.matriculados}
            duracao={curso.duracao}
            avaliacao={curso.avaliacao}
          />
        ));
      case "maisRecente":
        return recente.map((curso) => (
          <CardCursoPrincipais
            key={curso.id}
            titulo={curso.titulo}
            parceiros={curso.parceiros}
            capa={curso.capa}
            matriculados={curso.matriculados}
            duracao={curso.duracao}
            avaliacao={curso.avaliacao}
          />
        ));
      default:
        return null;
    }
  };

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="inicio">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src="montagem.png" alt="" />
          <div className="overlay">
            <img  className="imgPrincipal" src="/group.png" alt="" />
            <img src="/groupDois.png" alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src="montagem.png" alt="" />
        </Carousel.Item>
      </Carousel>
      <div className="containerCategorias">
        <h1>Módulos Educacionais</h1>
        <div className="container-btt">
          <div>
            <NavLink onClick={() => setPagina("maisPopular")}>
              Mais populares
            </NavLink>
            <NavLink onClick={() => setPagina("maisBemAvaliado")}>
              Mais bem avaliados
            </NavLink>
            <NavLink onClick={() => setPagina("maisRecente")}>
              Mais recentes
            </NavLink>
          </div>
        </div>
        {renderizarCursos()}
        <Link className="bttVerMais" to="/cursos">
          Ver mais
        </Link>
      </div>
     
      <Parceiros /> 
    </section>
  );
}

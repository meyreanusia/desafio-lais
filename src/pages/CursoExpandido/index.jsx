import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApiCursos from "../../service/useApiCursos";
import "./CursoExpandido.scss";

export default function CursoExpandido() {
  const { id } = useParams();
  const { handleBuscarCurso, modulos } = useApiCursos();
  useEffect(() => {
    console.log(id);
    if (id) {
      handleBuscarCurso(id);
    } else {
      console.error("ID está indefinido");
    }
  }, [id]);


  return (
    <div className="cursoExpandido">
      <div className="containerCapa"style={{ backgroundImage: `url(${modulos.capa})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover"}}>
        <div>
          <div>
          <small>Inicio / Cursos / Módulos / {modulos.titulo}</small>
          <h3>{modulos.titulo}</h3>
          <p>{modulos.parceiros}</p>
          </div>
          
        </div>
      </div>

      <section className="infoCurso">
        <h1>Informações Gerais do Curso</h1>
        <div className="infoEspecifica">
          <img src="/tempo.png" alt="" />
          {<small>modulos.duracao</small>}
          <img src="/calendario.png" alt="" />
          {<small>{`Desde ${modulos.criado_em}`}</small>}
          <img src="/inscritos.png" alt="" />
          {<small>{`${modulos.matriculados} alunos matriculados`}</small>}
          {<small>{`${modulos.avaliacao} (${modulos.numero_avaliacoes} avaliações)`}</small>}
        </div>
        <h3>Sobre o curso</h3>
        <p>{modulos.sobre}</p>
        <h3>Objetivos</h3>
        <strong>Objetivo Geral</strong>
        <p>{modulos.objetivo_geral}</p>
        <strong>Objetivos Específicos</strong>
        <ul>
        {modulos.objetivo_especifico}
        </ul>
        <h3>Recursos educacionais</h3>
        <p>{modulos.recursos_educacionais}</p>
        <h3>Créditos</h3>

        <img src="/credito.png" alt="" />

      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import "./CardCurso.scss";

export default function CardCurso({
  id,
  titulo,
  parceiros,
  matriculados,
  duracao,
  avaliaca,
  sobre,
  capa,
}) {
  const limitarTexto = (texto, limite) => {
    if (texto.length > limite) {
      return texto.substring(0, limite) + "...";
    }
    return texto;
  };
  <p>{limitarTexto(sobre, 90)}</p>;

  return (
    <div className="cardCurso">
      <section className="infoCurso">
        <img src={capa} alt="" />
      </section>
      <section className="sobre">
        <h3>{titulo}</h3>
        <p>{parceiros}</p>
        <div className="containerIfoCurso">
          <img src="inscritos.png" alt="" />
          <small>{matriculados}</small>
          <img src="tempo.png" alt="" /> <small>{duracao}</small>
          <div>
            <small>{avaliaca}</small>
          </div>
        </div>
        <p className="texto">{limitarTexto(sobre, 90)}</p>
      </section>
      <Link className="linkToCurso" to={`/curso/${id}`}>Ver curso</Link>
    </div>
  );
}

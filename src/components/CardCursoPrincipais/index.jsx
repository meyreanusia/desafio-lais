import "./CardCursoPrincipais.scss";

export default function CardCursoPrincipais({
  titulo,
  parceiros,
  capa,
  matriculados,
  duracao,
  avaliacao,
}) {
  return (
    <div className="cursoPrincipal">
      <section className="sectionUm">
        <div className="fotoCapa" style={{ backgroundImage: `url(${capa})` }}></div>
        <div className="titulos">
          <p>{titulo}</p>
          <small>{parceiros}</small>
        </div>
      </section>

      <section className="sectionDois">
        <img className="inscritos" src="inscritos.png" alt="" />
        <small>{matriculados}</small>
        <img className="tempo" src="tempo.png" alt="" />
        <small>{duracao}</small>
        <small>{avaliacao}</small>
        <button>Ver módulo</button>
      </section>
    </div>
  );
}

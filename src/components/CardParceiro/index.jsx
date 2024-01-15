import "./CardParceiro.scss";

export default function CardParceiro({ parceiro }) {

  const divStyle = {
    backgroundImage: `url(${parceiro.capa})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  };

  return (
    <div className="cardParceiro" >
      <section className="cardImgParceiro" style={divStyle}>
      </section>
      <section className="cardTituloParceiro">
        <p> {parceiro.titulo}</p>

    </section>
    </div>
  );
}

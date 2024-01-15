import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="container-footer">
      <section className="footer-realizacoes">
        <small>Realização</small>
        <div>
          <img src="lais.png" alt="" />
          <img src="ufrn.png" alt="" />
        </div>
      </section>
      <section className="footer-links">
        <div className="link-lais">
          <img src="/lais.png" alt="logo LAIS" />
          <p>Laboratório de Inovação Tecnológica em Saúde.</p>
        </div>
        <div className="link-menu">
          <small>Links Úteis</small>
          <a href="">início</a>
          <a href="">Sobre Nós</a>
          <a href="">Módulos</a>
          <a href="">Parceiros</a>
          <a href="">Transparência</a>
        </div>
        <div className="link-redes">
          <small>Redes sociais</small>
          <div>
            <a href="">
              <img src="/facebook.png" alt="" />
            </a>
            <a href="">
              <img src="/twitter.png" alt="" />
            </a>
            <a href="">
              <img src="/instagram.png" alt="" />
            </a>
          </div>
        </div>
      </section>

      <section className="direitos-autorais">
        <div>
          2022 © LAIS (HUOL). Todos os direitos reservados
        </div>
      </section>
    </footer>
  );
}

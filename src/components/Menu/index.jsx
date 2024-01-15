import Button from "../Button"
import MenuLink from "../MenuLink";
import "./Menu.scss";

export default function Menu() {
  return (
    <header>
      <img src="/logo.png" alt="" />
      <nav className="navegacao">
        <MenuLink to="/">Início</MenuLink>
        <MenuLink >Sobre Nós</MenuLink>
        <MenuLink to="/cursos">Cursos</MenuLink>
        <MenuLink to="/parceiros">Parceiros</MenuLink>
        <MenuLink to="/transparencia">Transparência</MenuLink>
        <MenuLink >Contato</MenuLink>
      </nav>
      <div className="container-navegacao">
      <input type="text" placeholder="Buscar por um assunto..." />
       <Button>Entrar</Button>
       <Button className={"btt-primario"}>Cadastrar</Button>
      </div>
    </header>
  );
}

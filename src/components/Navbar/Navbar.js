import './NavBar.css';
import logo from '../../assets/images/logo_infoshowrooms.svg';

function NavBar() {
  return (
    <nav className="NavBar flex justify-between items-center relative">
      <img alt="logo de la empresa" className="logo" src={logo} />
      <ul className="LinksNav">
        <a href="#Sobre_Nosotros" className="Nosotros">Sobre Nosotros</a>
        <a href="#Showrooms" className="Showrooms">Showrooms</a>
        <a href="#Asesoramiento" className="Asesoramiento">Asesoramiento</a>
        <a href="#Contacto" className="Contacto">Contacto</a>
      </ul>
    </nav>
  );
}

export default NavBar;
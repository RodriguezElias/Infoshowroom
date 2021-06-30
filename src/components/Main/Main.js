import './Main.css';
import NavBar from '../NavBar/NavBar';
import Carousel from '../Carousel/Carousel';
import Client from '../Client/Client';
import AboutUs from '../AboutUs/AboutUs';


function Main() {
  return (
    <div className="Main">
      <NavBar />
      <Carousel />
      <Client />
      <AboutUs/>
    </div>
  );
}

export default Main;

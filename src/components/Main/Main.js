import './Main.css';
import NavBar from '../NavBar/NavBar';
import Carousel from '../Carousel/Carousel';
import Client from '../Client/Client';


function Main() {
  return (
    <div className="Main">
      <NavBar />
      <Carousel />
      <Client />
    </div>
  );
}

export default Main;

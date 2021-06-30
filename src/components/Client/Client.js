import React from 'react';
import './Client.css';
import Divisor from "../../assets/images/divisor.png";

const Client = () => {
  return ( 
    <div className="container-client">
      <div>
        <img className="image-divisor" src={Divisor} alt=""/>
      </div>
      <div className="text-client">
        <h2>CONFÍAN EN NOSOTROS</h2>
      </div>
      <div className="container-images">
        <img className="image-client" src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg" alt="" />
        <img className="image-client" src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg" alt="" />
        <img className="image-client" src="https://images.unsplash.com/photo-1518288774672-b94e808873ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=678&q=80" alt="" />
        <img className="image-client" src="https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
        <img className="image-client" src="https://images.unsplash.com/photo-1546180572-28e937c8128b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="" />
      </div>
    </div>
   );
}
 
export default Client;
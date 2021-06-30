import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return ( 
    <div className="container-aboutUs">
      <div className="container-element-aboutUs">
      <div className="aboutUs-image">
        <img className="image-aboutUs" src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg" alt="Nosotros"/>
      </div>
      <div className="aboutUs-text">
        <h2 className ="aboutUs-title">SOBRE NOSOTROS</h2>
        <p className="aboutUs-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus earum pariatur sunt iste dignissimos, nisi unde cumque a nemo magni incidunt error quisquam quae autem est illum, sint voluptates inventore!</p>
      </div>
      </div>
    </div>

  );
}
 
export default AboutUs;
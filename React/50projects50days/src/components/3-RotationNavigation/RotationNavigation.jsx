import { useState } from "react";

import NavBar from "../shared/NavBar/NavBar";
import "./RotationNavigation.css";

const RotationNavigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen(false);
    console.log(isNavOpen);
  };

  const openNav = () => {
    setNavOpen(true);
    console.log(isNavOpen);
  };

  return (
    <div className="rotation-navigation">
      <NavBar>Progress Steps</NavBar>
      <div className={isNavOpen ? "container show-nav" : "container"}>
        <div className="circle-container">
          <div className="circle">
            <button onClick={closeNav} id="close">
              <i className="fas fa-times"></i>
            </button>
            <button onClick={openNav} id="open">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        <div className="content">
          <h1>Amazing Article</h1>
          <small>Sam Puckett</small>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            ipsa, quisquam odio voluptas suscipit at quis, cum vel non totam
            autem id esse voluptate dolorem. Optio sit obcaecati eum dicta
            necessitatibus doloremque cupiditate rem deleniti, quas dolorum
            quasi architecto reprehenderit eveniet facere ullam nulla odit
            voluptate corporis maxime ipsa? Accusantium voluptate, omnis veniam
            accusamus dolore quas dolores ex sapiente minima totam explicabo rem
            soluta ducimus optio distinctio mollitia. Alias itaque esse libero
            harum perspiciatis nisi ipsum laboriosam, at iure ducimus dolores
            eligendi architecto recusandae rerum cum veniam ea dignissimos
            delectus repudiandae officia quas! Animi laudantium qui, possimus
            nihil itaque consequuntur!
          </p>

          <h3>My Dog</h3>
          <img
            src="https://images.unsplash.com/photo-1544568100-847a948585b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt="doggy"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            officia alias. Assumenda excepturi, fugit ducimus magni modi quis?
            Dignissimos perferendis hic labore vero impedit, rerum accusamus
            nemo sapiente minus error facilis sequi doloremque numquam
            cupiditate esse, corporis blanditiis atque? Adipisci quasi
            voluptatum, maxime inventore deleniti cumque, perspiciatis porro
            assumenda provident tenetur ullam. Aperiam, dicta? Laudantium veniam
            deserunt, officiis similique ullam esse, velit nihil enim doloribus
            iste obcaecati nemo id porro error facilis sit explicabo facere.
          </p>
        </div>
      </div>

      <div className="nav-rotation-navigation">
        <ul>
          <li>
            <i className="fas fa-home"></i> Home
          </li>
          <li>
            <i className="fas fa-user-alt"></i> About
          </li>
          <li>
            <i className="fas fa-envelope"></i> Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RotationNavigation;

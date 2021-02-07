import { useHistory } from "react-router-dom";

import "./NavBar.css";

const NavBar = (props) => {
  const history = useHistory();

  const backButtonHandler = () => {
    history.push("/");
  };

  return (
    <nav>
      <button onClick={backButtonHandler}>←</button>
      {props.children}
    </nav>
  );
};

export default NavBar;

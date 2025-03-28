import logo from "../../assets/icons/logo.svg";
import dog from "../../assets/images/dog.png";

import "./HomePage.css";

export function HomePage() {
  return (
    <div className="page">
      <img src={logo} alt="logo" className="logo" />
      <img src={dog} alt="dog" className="dog" />
    </div>
  );
}

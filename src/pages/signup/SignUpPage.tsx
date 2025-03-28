import logo from "../../assets/icons/logo.svg";
import dog from "../../assets/images/dog.png";

import "./SignUpPage.css";

export function SigUpPage() {
  return (
    <div className="page">
      <div className="left-side">
        <img src={logo} alt="logo" className="logo" />
        <img src={dog} alt="dog" className="dog" />
      </div>

      <div className="right-side">

        <div className="card">


        </div>


      </div>
    </div>
  );
}

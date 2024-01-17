import React from "react";
import Figure from "react-bootstrap/Figure";
import headerImg from "../assets/img/headerImg.png";
import "../layouts/style.css";

function BodyUp() {
  return (
    <div className="bodyUpContainer">
    <Figure className="bodyUp">
      <Figure.Image src={headerImg} className="BodyUpImg" fluid/>
      <Figure.Caption className="bodyUpCap" >A few words about this blog <br/>platform, Ghost, and how this<br/> <p>site was made</p></Figure.Caption>
      <Figure.Caption className="bodyUpCap-B">Why Ghost (& Figma) instead of Medium,<br/><p>WordPress or other options?</p> </Figure.Caption>
    </Figure>
    </div>
  );
}

export default BodyUp;

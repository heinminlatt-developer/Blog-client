import Figure from "react-bootstrap/Figure";
import profile from "../assets/img/profile.jpg";
import Groupfb from "../assets/img/Groupfb.png"


function DetailsProfile() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Figure className="d-flex justify-content-center align-items-center rounded">
        <Figure.Image width={100} height={100} alt="171x180" src={profile} />
        <Figure.Caption className="font-weight-bold ml-5">Mika Matikainen Apr 15, 2020 · 4 min read</Figure.Caption>
      </Figure>
      <Figure className="d-flex justify-content-center align-items-center">
      <Figure.Image width={100} height={100} alt='H' src={Groupfb}/>
      </Figure>
    </div>
  );
}

export default DetailsProfile;

import "../styles/header.css";
import image1 from "../assets/header1.jpg";
import image2 from "../assets/header2.jpg";

const Header = () => {
  return (
    <div className="container">
      <div className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="img-carousel " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image2} className="img-carousel" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

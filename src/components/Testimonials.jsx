import "../styles/testimonials.css";
import image7 from "../assets/image7.png";
import image8 from "../assets/p1.jpg";

const Testimonials = () => {
  return (
    <div className="testimony-main">
      <div className="container trns-conatainer">
        <div className="section-text">
          <div className="carousel slide " data-bs-ride="carousel">
            <div class="carousel-indicators indicators">
               
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner carousel-container">
              <div className="carousel-item active">
                <p>
                  Our client list is drawn from the competitive world of
                  stand-up comedy and our boutique, focused company works
                  closely with them to develop talents learned on the circle
                  into the skills for a long-lasting career performing and
                  writing for television
                </p>
                <div className="">
                  <div className="member-details">
                    <img src={image8} className="carousel-img" alt="..." />

                    <div className="member-subText">
                      <h3>Melisa WoodLand</h3>
                      <span>Member Since 2009</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <p>
                  Our client list is drawn from the competitive world of
                  stand-up comedy and our boutique, focused company works
                  closely with them to develop talents learned on the circle
                  into the skills for a long-lasting career performing and
                  writing for television
                </p>
                <div>
                  <div className="member-details">
                    <img src={image8} className="carousel-img" alt="..." />

                    <div className="member-subText">
                      <h3>Williams Barel</h3>
                      <span>Member Since 2009</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <p>
                  Our client list is drawn from the competitive world of
                  stand-up comedy and our boutique, focused company works
                  closely with them to develop talents learned on the circle
                  into the skills for a long-lasting career performing and
                  writing for television
                </p>
                <div className="member-details">
                  <img src={image8} className="carousel-img" alt="..." />
                  <div className="member-subText">
                    <h3>Scott Kusha</h3>
                    <span>Member Since 2009</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimony-image">
          <img src={image7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

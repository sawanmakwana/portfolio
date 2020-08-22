import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from "../../assets/hero/hero-image.png";
//Components
import Button from "../ui-components/button/button";

const hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="wrapper">
        <Row>
          <Col md={12} lg={6}>
            <div className="hero-info">
              <h1 className="weight800 font60">Hello!!!</h1>
              <h1 className="weight800 font60">
                My Name is Savan Makwana.
              </h1>
              <p className="font12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <Button label="DOWNLOAD RESUME" target={"contact"} />
            </div>
          </Col>
          <Col md={12} lg={6}>
            {/* <div id="bodymovin"></div>{" "} */}
            {/* <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid meet",
                },
              }}
              height={400}
              width={400}
            /> */}
            <div className="hero-image">
              <img src={HeroImage} alt="hero" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default hero;

import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";

import FacebookIcon from "../../../assets/contact/facebook.svg";
import BehanceIcon from "../../../assets/contact/behance.png";
import LinkedIn from "../../../assets/contact/linkedin.png";

const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
          <a
            href="https://www.linkedin.com/in/savan-makwana-780238111/"
            target="_blank"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://www.behance.net/sawanmakwa7b13" target="_blank">
            <img src={BehanceIcon} alt="Behance" />
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://www.facebook.com/SavanMakwana305/" target="_blank">
            {" "}
            <img src={FacebookIcon} alt="facebook" />
          </a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;

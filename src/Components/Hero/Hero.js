import React from "react";
import { Row, Col, Button } from "antd";
import "./Hero.scss";

class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="container">
          <Row>
            <Col span={14}>
              <p className="hero__tag">SUMMER 2020</p>
              <h1 className="hero__title">NEW COLLECTION</h1>
              <p className="hero__descirption">We know how large objects will act, but things on a small scale.</p>
              <Button className="hero__button" type="primary" size="large">
                SHOP NOW
              </Button>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default Hero;

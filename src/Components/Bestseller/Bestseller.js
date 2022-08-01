import React from "react";
import { Row } from "antd";
import { BestsellerData } from "./BestsellerData";
import BestsellerCard from "./BestsellerCard/BestsellerCard";
import "./Bestseller.scss";

class Bestseller extends React.Component {
  render() {
    return (
      <section className="bestseller">
        <div className="container">
          <div className="bestseller__intro">
            <p className="bestseller__intro__tag">Featured Products</p>
            <h2 className="bestseller__intro__title">BESTSELLER PRODUCTS</h2>
            <p className="bestseller__intro__description">Problems trying to resolve the conflict between </p>
          </div>
          <Row gutter={[32, 80]} className="bestseller__cards">
            {BestsellerData.map((data) => (
              <BestsellerCard key={data.index} {...data} />
            ))}
          </Row>
        </div>
      </section>
    );
  }
}

export default Bestseller;

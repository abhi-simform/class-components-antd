import React from "react";
import { Col, Card } from "antd";
import "./BestsellerCard.scss";

class BestsellerCard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Col span={6}>
        <Card className="card" cover={<img src={this.props.image} alt="product image" />}>
          <p className="card__title">{this.props.title}</p>
          <p className="card__department">{this.props.department}</p>
          <p className="card__price">
            <span className="card__price--old">{this.props.oldPrice}</span>
            <span className="card__price--new">{this.props.newPrice}</span>
          </p>
          <div className="card__colors">
            {this.props.colors.map((color) => (
              <span className={"card__colors--color " + color}></span>
            ))}
          </div>
        </Card>
      </Col>
    );
  }
}

export default BestsellerCard;

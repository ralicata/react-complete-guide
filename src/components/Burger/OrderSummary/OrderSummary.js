import React, { Component } from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("[OrderSummary] Will Update");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.totalPrice}</strong>
        </p>
        <p>Continue with checkout?</p>
        <Button buttonType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button buttonType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;

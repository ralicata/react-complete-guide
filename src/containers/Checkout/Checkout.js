import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 1,
      bacon: 1,
      meat: 1
    }
  };

  CheckoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  CheckoutContinuedHandler = () => {
    this.props.history.replace("/checkout/content-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          CheckoutCancelled={this.CheckoutCancelledHandler}
          CheckoutContinued={this.CheckoutContinuedHandler}
        />
      </div>
    );
  }
}

export default Checkout;

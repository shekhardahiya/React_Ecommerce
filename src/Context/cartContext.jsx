import React, { Component } from "react";

export var CartContext = React.createContext(0);

export default class CartContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  render() {
    return (
      <div>
        <CartContext.Provider
          value={{
            count: this.state,
            addItem: (ele) => {
              let result = this.state.items.some(
                (e) => e.product.id === ele.id
              );
              if (!result) {
                let toAdd = { product: ele, count: 1 };
                this.state.items.push();
                this.setState({ items: [...this.state.items, toAdd] });
              } else {
                let result1 = this.state.items.find(
                  (e) => e.product.id === ele.id
                );
                result1.count = result1.count + 1;
                this.setState({ items: [...this.state.items] });
              }

              //   ele = { product: { name: "sdf" }, count: 5 };
              //   this.setState({ items: [...this.state.items, ele] });
            },
            removeItem: (ele) => {
              let result = this.state.items.some(
                (e) => e.product.id === ele.id
              );
              if (result) {
                let result1 = this.state.items.find(
                  (e) => e.product.id === ele.id
                );
                let index = this.state.items.indexOf(result1);

                // while (result1.count > 1) {
                result1.count = result1.count - 1;
                this.setState({ items: [...this.state.items] });
                // }
                if (result1.count == 0) {
                  this.state.items.splice(index, 1);
                  this.setState({ items: [...this.state.items] });
                }
              }
            },
            finalAmount: 0,
          }}
        >
          {this.props.children}
        </CartContext.Provider>
      </div>
    );
  }
}

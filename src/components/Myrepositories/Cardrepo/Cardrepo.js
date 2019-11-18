import React, { Component } from "react";

import "./styles.css";

export default class Myrepositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn: ""
    };
  }

  click = e => {
    console.log("Click");
  };

  render() {
    return (
      <div className="card_rep">
        <div className="txt_card">
        <h1 >Elkinssm</h1>
        <h2>ID: {this.props.id}</h2>
        <h3>NAME: {this.props.name}</h3>
        </div>

        <button onClick={event => this.click(event)}>
          <a href={this.props.url} target="_blank">
            IR
          </a>
        </button>
      </div>
    );
  }
}

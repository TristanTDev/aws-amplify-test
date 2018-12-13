import React, { Component } from 'react';

export default class ChatTabComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: props.chat.heading,
      subheading: props.chat.subheading,
      type: props.chat.type
    }
  }

  render() {
    return (<div>
      <div className="row">
        <div className="col">
          <h3>{this.state.heading}</h3>
          <h5>{this.state.subheading}</h5>
        </div>
        <div className="col">
          <h3>...</h3>
        </div>
      </div>
    </div>
    );
  }
}
import React, { Component } from 'react';
import ChatTabComponent from './ChatTabComponent';

class MainTabComponent extends Component {
  state = {

  }

  constructor(props) {
    super(props);
    this.state.chats = props.chats;
  }

  render() {
    return (<div>
      {this.state.chats.map(chat => {
        <ChatTabComponent chat={chat} />
      })
      }
    </div>
    );
  }
}

export default MainTabComponent;
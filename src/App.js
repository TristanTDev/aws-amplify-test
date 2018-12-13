import React, { Component } from 'react';
import './App.css';
import { API, graphqlOperation } from "aws-amplify"
import MainTabComponent from "./components/MainTabComponent"

const query = `query GetChats {
  chats(collective: "11C3091B-840A-4F2A-8CA2-E758F2F0755E") {
    sections {
      label
    }
  }
}`;

class App extends Component {
  state = { chatStatements: [] }
  async componentDidMount() {
    const data = await API.graphql(graphqlOperation(query))
    this.setState({
      chatStatements: data.data.chats.sections
    });
  }
  render() {
    const data = {
      heading: "Heading",
      subheading: "sub",
      type: "normal"
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            {
              this.state.chatStatements.map((section, index) => (
                <p key={index}>{section.label}</p>
              ))
            }
          </p>
        </header>
        <body>
          <MainTabComponent chats={data} ></MainTabComponent>
        </body>
      </div >
    );
  }
}

export default App;

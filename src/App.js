import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';


var firebaseConfig = {
  apiKey: "AIzaSyA4RPiptkS8eBTLonv7B2ZLPkAH0dai6b4",
  authDomain: "chattycatty-app.firebaseapp.com",
  databaseURL: "https://chattycatty-app.firebaseio.com",
  projectId: "chattycatty-app",
  storageBucket: "",
  messagingSenderId: "6976054198",
  appId: "1:6976054198:web:93737d7caaaf917a"
};

firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeRoom: '',
    };

    this.setActiveRoom = this.setActiveRoom.bind(this);
  }


  setActiveRoom(room){

    this.setState({
      activeRoom: room
    });

  }


  render() {
    return (
      <div className="App">
        <h1>Chatty Catty App</h1>
          <RoomList
            firebase={firebase}
            activeRoom={this.state.activeRoom}
            setActiveRoom={this.setActiveRoom}
          />
          <MessageList
            firebase={firebase}
            activeRoom={this.state.activeRoom}
          />
        </div>
      );
    }
  }
  
export default App;
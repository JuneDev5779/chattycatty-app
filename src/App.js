import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


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
  render() {
    return (
      <div><RoomList firebase={firebase} /></div>
    );
  }

}
export default App;
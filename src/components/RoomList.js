import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props){
    super(props);

    this.state = {
      rooms: [],
      newRoomName: '',
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.handleUserInput = this.handleUserInput.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat(room)});
    });
  }

  handleUserInput(e){
    this.setState({
      newRoomName: e.target.value
    });
    console.log(this.state.newRoomName);
  }

  createRoom() {
    if(this.state.newRoomName.trim() !== ""){
      this.roomsRef.push({
        name: this.state.newRoomName
      });
      this.setState({
        newRoomName: '',
      });
    }
    else{
      alert("Please enter a Room Name");
      this.setState({
        newRoomName: '',
      });
    }
  }


  render() {
    return (
      <section>
      <h1>Welcome to Chatty Catty</h1>
      <ul>
      {this.state.rooms.map( room =>
        <li key={room.key}>{room.name}</li>
      )}
      </ul>

      <input type="text" placeholder="Name the new chat room..." value={this.state.newRoomName} onChange={this.handleUserInput}/>
      <button onClick={this.createRoom}>Create New Catty Chatty Chat Room</button>

      </section>
    );
  }
}

export default RoomList;
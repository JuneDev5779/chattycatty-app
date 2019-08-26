import React, { Component } from 'react';
import * as firebase from 'firebase';

export class RoomList extends Component {
    constructor (props) {
        super (props);

        this.state = {
            rooms: [],
            name: ''
        };

        this.roomsRef = this.props.firebase.database().ref('rooms');
    
    }
}

componentDidMount() {

    this.roomsRef.on('child_added', snapshot => {
       
        const room = snapshot.val();
        room.key = snapshot.key;
        this.setState({ rooms: this.state.rooms.concat( room ) })
        
    });
}


render() {
    const roomList = this.state.rooms.map((room, index));

    return (
        <div>
            <ul>{roomList}</ul>
        </div>
        )
    }
}
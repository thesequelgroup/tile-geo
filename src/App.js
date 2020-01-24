import React, { Component } from 'react';
import './App.css';

import MapSection from './components/map/map.js';

// IMPORT FEATHERS, SOCKET
import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {

    // CONNECT TO SOCKET
    const socket = io('http://korys-mbp:3030', {
      transports: ['websocket'],
      forceNew: true
    });
    const client = feathers();

    client.configure(socketio(socket), {timeout: 2000});

    const messageService = client.service('vehicle');

    socket.emit('find', 'vehicle', { status: 'read' }, (error, data) => {
      console.log('Found all vehicles', data);
    });

  }

  render() {
    return (
      <div className="App">
        <MapSection />
      </div>
    )
  }
}

export default App;

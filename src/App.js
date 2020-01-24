import React, { Component } from 'react';
import './App.css';

import MapSection from './components/map/map.js';

// IMPORT FEATHERS, SOCKET
import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';

// REDUX
import store from './components/store/index.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      vehicles: []
    };
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
      
      // COMMIT ALL VEHICLES TO STATE
      this.setState(prevState => ({ vehicles: [...data] }), () => {

        // DISPATCH TO REDUX STORE
        // console.log(this.state.vehicles);
        store.dispatch({ type: 'ALL_VEHICLES', payload: this.state.vehicles });
      });

    });

  }

  render() {
    return (
      <div className="App">
        <MapSection
          all_vehicles={null}
        />
      </div>
    )
  }
}

export default App;

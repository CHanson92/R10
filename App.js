import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Font } from 'expo';
import Routes from './js/navigation/Routes';


class App extends Component {
  render() {
    return (
        <Routes />
    )
  }
}

export default App;
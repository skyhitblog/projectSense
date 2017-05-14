import Expo from 'expo'
import React, { Component } from 'react';
import { MapView, StyleSheet } from 'react-native';

class Map extends Component {
  render() {
    return (
      <MapView style={styles.map}
        showsUserLocation={true}
          region={{
            latitude: 39.06,
            longitude: -95.22,
              }}
      />
    );
  }
}

const styles = StyleSheet.create({

 map: {
    flex:1,
  },
});

Expo.registerRootComponent(Map)

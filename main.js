import Expo from 'expo'
import React, {Component} from 'react'
import {View} from 'react-native'
import Card from './card'
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDBFRRAQ1wHloyU14RizcAIW5RDPcbxF_M",
  databaseURL: "https://sense-8c1c3.firebaseio.com/"
}

firebase.initializeApp(firebaseConfig)

class App extends Component {

  state = {
    sensorIndex: 0,
    sensors: [],
  }

  componentWillMount() {
  firebase.database().ref().child('sensors').on('value', (snap) => {
    let sensors = []
    snap.forEach((sensor) => {
      const {location, vehiclecount} = sensor.val()
      sensors.push({location, vehiclecount})
    })
    this.setState({sensors})
  })
}

render() {
  const {sensorIndex} = this.state
  return (
    <View style={{flex:1}}>
      {this.state.sensors.reverse().map((sensor) => {
        return (
          <Card
            key={sensor.id}
            sensor={sensor}
          />
        )
      })}
    </View>
    )
  }

  _onValueChange = (vehiclecount) => {
    this.setState({
      value: vehiclecount,
    });
  };

}

Expo.registerRootComponent(App)

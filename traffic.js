import Expo from 'expo'
import React, {Component} from 'react'
import {View} from 'react-native'
import Card from './card'
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDBFRRAQ1wHloyU14RizcAIW5RDPcbxF_M",
  databaseURL: "https://sense-8c1c3.firebaseio.com/"
}

class App extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <Card sensor={sensor[0]} />
      </View>
    )
  }
}

const sensors = [
  {
    id: '259389830744794',
    name: 'Traffic',
    birthday: '10/18/1986',
    bio: 'Azara, Guwahati',
  },
]

Expo.registerRootComponent(App)

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import React, { Component } from 'react';
//import {
//  AppRegistry,
//  StyleSheet,
//  Text,
//  MapView,
//  View
//} from 'react-native';
//
//export default class ReactNativeTest extends Component {
//  render() {
//    return (
//      <View style={styles.container}>
//        <Text style={styles.welcome}>
//          Czesc Lilka moja
//        </Text>
//        <Text style={styles.instructions}>
//          Będę pisał fajne apki na androida
//        </Text>
//        <Text style={styles.instructions}>
//          Na twojego iOS tez..
//        </Text>
//        <Text style={styles.instructions}>
//          Double tap R on your keyboard to reload,{'\n'}
//          Shake or press menu button for dev menu
//        </Text>
//      </View>
//
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});
//
//AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);


//import React, { Component } from 'react';
//import { AppRegistry, View, Text, StyleSheet } from 'react-native';
//import MapView from 'react-native-maps';
//
//const styles = StyleSheet.create({
//  container: {
//    height: 600,
//    width: 400,
//    justifyContent: 'flex-end',
//    alignItems: 'center',
//  },
//  map: {
//    height: 600,
//    width: 400,
//  },
//});
//
//class MyApp extends React.Component {
//  render() {
//    const { region } = this.props;
//    console.log(region);
//
//    return (
//      <View style ={styles.container}>
//        <MapView
//          style={styles.map}
//          region={{
//            latitude: 37.78825,
//            longitude: -122.4324,
//            latitudeDelta: 0.015,
//            longitudeDelta: 0.0121,
//          }}
//        >
//        </MapView>
//      </View>
//    );
//  }
//}
//
//AppRegistry.registerComponent('ReactNativeTest', () => MyApp);

import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput } from 'react-native';
//import 'font-awesome/css/font-awesome.min.css';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    alignItems: 'center'
  },
  inputs: {
    height: 60,
    marginTop: 20,
    fontSize: 30,
    backgroundColor: 'white',
    width: 300,
    textAlign: 'center'
  },
    inputsTop: {
      height: 60,
      marginTop: 200,
      fontSize: 30,
      backgroundColor: 'white',
      width: 300,
      textAlign: 'center'
    },
    centerStuff: {
        alignItems: 'center',
        flex: 10,
        backgroundColor: '#412A58'
    }
});

class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#4b3065'}}>
            <Text style={styles.welcome}>
                Infinity Illusions Numerology
            </Text>
        </View>
        <View style={styles.centerStuff}>
                <TextInput
                  style={styles.inputsTop}
                  placeholder="Login"
                  onChangeText={(text) => this.setState({text})}
                />
                <TextInput
                  style={styles.inputs}
                  placeholder="Password"
                  onChangeText={(text) => this.setState({text})}
                />
        </View>
        <View style={{flex: 1, backgroundColor: '#4b3065'}}>
             <Text style={styles.welcome}>
                 My reports | log out
             </Text>
         </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactNativeTest', () => FlexDimensionsBasics);
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import * as firebase from "firebase";
// import { createBottomTabNavigator } from 'react-navigation';ex
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Container, Title, BodyText } from './src/styles';
import DeckMain from './src/components/DeckMain';
import Quiz from './src/components/Quiz';
import Launcher from './src/views/Launcher';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCOlwtsdOlD6fyaWhIHJrmam3swasVrOLU",
  authDomain: "garden-c5654.firebaseapp.com",
  databaseURL: "https://garden-c5654.firebaseio.com",
  projectId: "garden-c5654",
  storageBucket: "garden-c5654.appspot.com",
  messagingSenderId: "989049665439",
  appId: "1:989049665439:web:83a415acfc99797b51efaa",
  measurementId: "G-SVJE23M9Q4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const NavStack = createStackNavigator({
  Launcher: {
    screen: Launcher,
    navigationOptions: () => ({
      header: null
    })
  },
  DeckMain: {
      screen: DeckMain,
    },
  Quiz: {
    screen: Quiz,
  },
});

const MainNav = createAppContainer(NavStack);

// export default createAppContainer(


// );

export default function App() {
  return (
    <MainNav />
  );
}



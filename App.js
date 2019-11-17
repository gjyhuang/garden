import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import * as firebase from "firebase";
// import { createBottomTabNavigator } from 'react-navigation';ex
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Container, Title, BodyText } from './src/styles';
import { Provider } from 'react-redux';
import store from './src/store/index'
import DeckMain from './src/components/DeckMain';
import Deck from './src/components/Deck';
import Garden from './src/components/Garden';
import Launcher from './src/views/Launcher';
import Quiz from './src/components/Quiz';
import QuizForm from './src/components/Quiz/QuizForm';
import Card from './src/components/Flashcards/Card';
import setLocalNotification from './src/notifs';

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
  Deck: {
    screen: Deck,
  },
  Quiz: {
    screen: Quiz,
  },
  QuizBlank: {
    screen: QuizForm,
  },
  Garden: {
    screen: Garden,
  },
  Card: {
    screen: Card,
  }
});

const MainNav = createAppContainer(NavStack);

export default class App extends React.Component {

  componentDidMount(){
    // setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <MainNav />
      </Provider>
    );
  }
}



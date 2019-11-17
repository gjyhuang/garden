import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Container, TitleH2, BodyText, Button, Divider } from '../styles';
import Question from './Quiz/Question';

class Deck extends Component {

  render() {
    return (
      <Container>
        <TitleH2>World Capitals</TitleH2>
        <Question />
      </Container>
    )
  }
}

export default Deck;

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

class DeckMain extends Component {

  render() {
    return (
      <Container>
        <TitleH2>I would like to study...</TitleH2>
        <Divider />
      </Container>
    )
  }
}

export default DeckMain;

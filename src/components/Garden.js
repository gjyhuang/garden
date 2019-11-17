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

class Garden extends Component {

  render() {
    return (
      <Container>
        <TitleH2>My garden</TitleH2>
      </Container>
    )
  }
}

export default Garden;

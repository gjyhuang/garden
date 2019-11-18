import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Button,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Container, TitleH2, BodyText, OrangeButton, Divider, ButtonWrap, ButtonText } from '../styles';

class DeckMain extends Component {

  render() {
    return (
      <Container>
        <TitleH2>I would like to study...</TitleH2>
        <Divider />
        <ButtonWrap>
          <OrangeButton
            onPress={() => this.props.navigation.navigate('Deck')}>
              <ButtonText>World Capitals</ButtonText>
          </OrangeButton>
          <OrangeButton
            onPress={() => this.props.navigation.navigate('Quiz')}>
              <ButtonText>Quiz me!</ButtonText>
          </OrangeButton>
        </ButtonWrap>
      </Container>
    )
  }
}

export default DeckMain;

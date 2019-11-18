import React, { Component } from 'react';
import { Button } from 'react-native';
import { Container, Title, SubheaderText, OrangeButton, ButtonText, Divider, styles } from '../styles';

class Launcher extends Component {
  render() {
    return (
      <Container>
        <Title>Welcome to Garden!</Title>
        <SubheaderText>What would you like to grow?</SubheaderText>
        <Divider />
        <OrangeButton
          onPress={() => this.props.navigation.navigate('DeckMain')}>
          <ButtonText>My Flashcards</ButtonText>
        </OrangeButton>
        <Divider />
        <OrangeButton
          onPress={() => this.props.navigation.navigate('Garden')}>
          <ButtonText>My garden</ButtonText>
        </OrangeButton>
      </Container>
    );
  }

}

export default Launcher;

import React, { Component } from 'react';
import { Container, Title, SubheaderText, OrangeButton, Divider } from '../styles';

class Launcher extends Component {
  render() {
    return (
      <Container>
        <Title>Welcome to Garden!</Title>
        <SubheaderText>What would you like to grow?</SubheaderText>
        <Divider />
        <OrangeButton
          onPress={() => this.props.navigation.navigate('DeckMain')}
          title='My Flashcards' />
        <Divider />
        <OrangeButton
          onPress={() => this.props.navigation.navigate('Garden')}
          title='My garden' />
      </Container>
    );
  }

}

export default Launcher;

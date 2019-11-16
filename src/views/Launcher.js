import React, { Component } from 'react';
import { Container, Title, BodyText, OrangeButton, Divider } from '../styles';

class Launcher extends Component {
  render() {
    return (
      <Container>
        <Title>Welcome to Garden!</Title>
        <BodyText>What would you like to grow?</BodyText>
        <Divider />
        <OrangeButton
          onPress={() => this.props.navigation.navigate('DeckMain')}
          title='My Flashcards' />
        <Divider />
        <OrangeButton
          onPress={() => this.props.navigation.navigate('Quiz')}
          title='My points' />
      </Container>
    );
  }

}

export default Launcher;

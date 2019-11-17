import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Container, TitleH2, BodyText, OrangeButton, Divider, Header, SubContainer, HalfDivider } from '../styles';

class Quiz extends Component {

  render() {
    return (
      <Container>
        <Header>Test your learning</Header>
        <HalfDivider />
        <SubContainer>
          <BodyText>We have an easier time recognizing
            info we already know than recalling it from memory. Would you like to take an easier multiple-choice quiz, or challenge yourself with a fill-in-the-blank test?</BodyText>
        <Divider />
        <OrangeButton
          onPress={() => this.props.navigation.navigate('QuizMC')}
          title='Multiple choice' />
        <OrangeButton
          onPress={() => this.props.navigation.navigate('QuizBlank')}
          title='Fill in the blank' />
        </SubContainer>
      </Container>
    )
  }
}

export default Quiz;

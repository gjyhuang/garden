import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  Keyboard,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Container, BodyText, Button, Divider, HalfDivider, QuestionDiv, TitleQuestion, SubmitAnswer, Popup, PopupText } from '../../styles';
import QuizForm from './QuizForm';
// import { addFlashcard, getFlashcards } from '../api/FlashcardsAPI'

class QuizFormWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      correctAnswer: false,
      incorrectAnswer: false,
      deck: [
        {
          id: 1,
          capital: 'Tokyo',
          country: 'Japan',
          priority: 0,
          flag: false
        },
        {
          id: 2,
          capital: 'Copenhagen',
          country: 'Denmark',
          priority: 0,
          flag: false
        },
        {
          id: 3,
          capital: 'Jakarta',
          country: 'Indonesia',
          priority: 0,
          flag: false
        },
        {
          id: 4,
          capital: 'Pretoria',
          country: 'South Africa',
          priority: 0,
          flag: false
        }
      ],
      currentCard: {},
    }
    this.updateCard = this.updateCard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const currentCards = this.state.deck;

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards) {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return card;
  }

  updateCard() {
    const currentCards = this.state.deck;
    let newCard = this.getRandomCard(currentCards);
    if (newCard.id === this.state.currentCard.id) {
      newCard = this.getRandomCard(currentCards);
    }
    if (newCard.id === this.state.currentCard.id) {
      newCard = this.getRandomCard(currentCards);
    }
    this.setState({
      currentCard: newCard
    })
    this.forceUpdate();
  }

  handleSubmit(evt) {
    evt.preventDefault();
    Keyboard.dismiss();
    // console.log(this.state.answer, this.state.currentCard.capital)
    this.setState({
      correctAnswer: false,
      incorrectAnswer: false
    })
    if (this.state.answer.trim() === this.state.currentCard.capital) {
      this.setState({correctAnswer: true})
    }
    else {
      this.setState({incorrectAnswer: true})
    }
  }

  handleAnswer = (text) => {
    this.setState({ answer: text })
  }

  render() {
    const Correct = (
      <Popup>
        <PopupText>That's correct - congrats!
          You've earned 100 points.
        </PopupText>
        <Image
          source={require('../../../assets/img/sun.png')}
          style={{height: 100, width: 100}}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Garden')}
          style={{backgroundColor: '#FEAF17'}}>
          <PopupText
            style={{fontWeight: 'bold'}}>Let's go to your garden and grow something new with them!</PopupText>
        </TouchableOpacity>
      </Popup>
    )
    const Incorrect = (
      <Popup>
        <PopupText>Sorry, that's not the right answer.</PopupText>
      </Popup>
    )

    let displayYes = this.state.correctAnswer ? Correct : <Text />;
    let displayNo = this.state.incorrectAnswer ? Incorrect : <Text />;

    // console.log('display >>>', display)
    // console.log('displayFlag >>>', displayFlag)
    console.log('correct >>> ', this.state.answerCorrect)
    console.log('isAnswered >>>', this.state.isAnswered)
    // if (this.state.isAnswered) console.log(display)

    return (
      <Container>
        <QuestionDiv>
        <TitleQuestion>What is the capital of {this.state.currentCard.country}?</TitleQuestion>
        <HalfDivider />
        <TextInput style = {{
          borderWidth: 2,
          borderColor: '#ffffff',
          color: '#ffffff',
          fontSize: 20,
          padding: 5,
          width: 200,
          textAlign: 'center',
        }}
          underlineColorAndroid = "transparent"
          placeholder = "your answer here"
          placeholderTextColor = "#17B2BD"
          autoCapitalize = "none"
          onChangeText = {this.handleAnswer}/>
        <TouchableOpacity onPress={this.handleSubmit}>
        <HalfDivider />
          <PopupText>Submit!</PopupText>
        </TouchableOpacity>
        </QuestionDiv>
        {displayYes}
        {displayNo}
      </Container>
    )
  }
}

export default QuizFormWrapper;

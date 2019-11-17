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
import Card from './Flashcards/Card';
// import { addFlashcard, getFlashcards } from '../api/FlashcardsAPI'

class Deck extends Component {
  state = {
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
    currentCard: {}
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

  render() {
    return (
      <Container>
        <TitleH2>World Capitals</TitleH2>
        <Card {...this.state.currentCard} />
      </Container>
    )
  }
}

export default Deck;

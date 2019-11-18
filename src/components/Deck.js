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
import Card from './Flashcards/Card';
import NextBtn from './Flashcards/NextBtn';
// import { addFlashcard, getFlashcards } from '../api/FlashcardsAPI'

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      currentCard: newCard,
    })
    this.forceUpdate();
  }

  render() {
    return (
      <Container>
        <TitleH2>World Capitals</TitleH2>
        <Card {...this.state.currentCard} isFlipping={this.state.isFlipping} />
        <NextBtn drawCard={this.updateCard}/>
      </Container>
    )
  }
}

export default Deck;

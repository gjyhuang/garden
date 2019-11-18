import React from "react";
import CardFlip from 'react-native-card-flip';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Container, TitleH2, BodyText, Button, QuestionDiv, Divider, TitleQuestion } from '../../styles';

export default class Card extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    if (!this.props.isFlipping) {
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    else {
      this.setState({isFlipped: false})
    }
  }

  render() {
    const { capital, country } = this.props;
    return (
      <Container>
        <View style={styles.container}>
          <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.card, styles.card1]}
              onPress={() => this.card.flip()}>
              <Text style={styles.label}>{country}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.card, styles.card2]}
              onPress={() => this.card.flip()}>
              <Text style={styles.label}>{capital}</Text>
            </TouchableOpacity>
          </CardFlip>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#018C96',
  },
  cardContainer: {
    width: 320,
    height: 470,
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEAF17',
  },
  label: {
    lineHeight: 470,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

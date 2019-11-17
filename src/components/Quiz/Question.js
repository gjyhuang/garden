import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, TitleH2, BodyText, Button, QuestionDiv, Divider, TitleQuestion } from '../../styles';

export default class Question extends React.Component {
  constructor() {
    super();

    this.state = {
      answer: null
    };
  }

  render() {
    return (
      <QuestionDiv>
        <TitleQuestion>What is the capital of Australia?</TitleQuestion>
      </QuestionDiv>
    );
  }
}

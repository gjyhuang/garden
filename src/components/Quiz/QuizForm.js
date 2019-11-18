import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import QuizFormInput from './QuizFormInput';
import { Container, TitleQuestion, SubmitAnswer, Divider, HalfDivider, QuestionDiv } from '../../styles';

const QuizForm = (props) => {
  const { capital, country } = props;
  return (
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <QuestionDiv>
        <TitleQuestion>What is the capital of {country}?</TitleQuestion>
        <HalfDivider />
        <Field
          name={'answer'}
          component={QuizFormInput}
        />
        <TouchableOpacity onPress={props.handleSubmit}>
        <HalfDivider />
          <SubmitAnswer>Submit!</SubmitAnswer>
        </TouchableOpacity>
        </QuestionDiv>
      </ScrollView>
    );
  };

  export default reduxForm({ form: 'answer' })(QuizForm);

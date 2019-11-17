import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import QuizFormInput from './QuizFormInput';
import { Container, TitleQuestion, SubmitAnswer, Divider, HalfDivider } from '../../styles';

const QuizForm = (props) => {
  return (
    <Container>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <TitleQuestion>Question:</TitleQuestion>
        <HalfDivider />
        <Field
          name={'answer'}
          component={QuizFormInput}
        />
        <TouchableOpacity onPress={props.handleSubmit}>
        <HalfDivider />
          <SubmitAnswer>Submit!</SubmitAnswer>
        </TouchableOpacity>
      </ScrollView>
    </Container>
    );
  };

  export default reduxForm({ form: 'answer' })(QuizForm);

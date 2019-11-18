import React, { Component } from 'react';
import { View, TouchableOpacity } from "react-native";
import { Container, TitleH2, BodyText, QuestionDiv, Divider, TitleQuestion, SubmitAnswer } from '../../styles';

class NextBtn extends Component{
    constructor(props){
        super(props);
        this.drawCard = this.drawCard.bind(this);
    }

    drawCard(){
        this.props.drawCard();
    }

    render(props){
        return(
            <View>
                <TouchableOpacity onPress={this.drawCard}><SubmitAnswer>Next</SubmitAnswer></TouchableOpacity>
            </View>
        )
    }
}

export default NextBtn

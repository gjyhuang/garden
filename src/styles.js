import styled from 'styled-components';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#018C96',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // titleText: {
  //   color: '#ffffff',
  //   fontSize: 40,
  //   fontFamily: 'sans-serif-thin',
  // },
  // bodyText: {
  //   color: '#ffffff',
  //   fontSize: 20,
  //   fontFamily: 'sans-serif-thin',
  // }
  orangeButton: {
    color: '#FEAF17',
    margin: 0.5,
  }
});

export const Container = styled.View`
  flex: 1;
  background-color: #018C96;
  align-items: center;
  justify-content: center;
`

export const CenterWrap = styled.View`
  align-items: center;
  justify-content: center;
`

export const SubContainer = styled.View`
  flex: 1;
  width: 80%;
`

export const ButtonWrap = styled.View`
  display: flex;
  flex-wrap: wrap;
  background-color: #016A66;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: auto;
  width: 70%;
  padding: 4px;
  border-radius: 1px;
  `

export const QuestionDiv = styled.View`
  flex: 1;
  align-items: center;
  text-align: center;
  margin-top: 100px;
  height: 100%;
  padding: 5px;
`

export const PointsDiv = styled.View`
  display: flex;
  flex-wrap: wrap;
  background-color: #016A66;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: auto;
  width: auto;
  padding: 4px;
  padding-left: 5px;
  border-radius: 1px;
  margin-top: 5px;
`

export const ItemDiv = styled.View`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: auto;
  width: auto;
  padding: 4px;
  border-radius: 1px;
  margin-top: 5px;
`

export const Popup = styled.View`
  width: 80%;
  margin-bottom: 100px;
  align-items: center;
  text-align: center;
  padding: 5px;
`

export const ShopDiv = styled.View`
  height: auto;
  width: 80%;
  background-color: #F9F9EB;
  margin-top: 50px;
  align-items: center;
  text-align: center;
  padding: 5px;
`

// background-color: #F35001;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 40;
  font-family: 'sans-serif-thin';
`

export const TitleH2 = styled.Text`
  color: #ffffff;
  font-size: 30;
  font-family: 'sans-serif-thin';
`

export const Header = styled.Text`
  color: #ffffff;
  font-family: 'sans-serif';
  font-size: 30;
`

export const TitleQuestion = styled.Text`
  color: #ffffff;
  font-size: 20;
  font-family: 'normal';
`

export const SubheaderText = styled.Text`
  color: #ffffff;
  font-size: 20;
  font-family: 'sans-serif-thin';
`

export const SubmitAnswer = styled.Text`
  color: #ffffff;
  font-size: 20;
  font-family: 'normal';
  align-self: center;
`

export const PopupText = styled.Text`
  color: #ffffff;
  font-size: 20;
  font-family: 'normal';
  text-align: center;
`

export const PopupTextDark = styled.Text`
  color: #016A66;
  font-size: 20;
  font-family: 'normal';
  text-align: center;
`

export const BodyText = styled.Text`
  color: #ffffff;
  font-size: 14;
  font-family: 'normal';
  text-align: justify;
`

export const HalfDivider = styled.View`
  height: 10px;
`

export const Divider = styled.View`
  height: 20px;
`

export const OrangeButton = styled.TouchableOpacity`
  color: #ffffff;
  background-color: #FEAF17;
  border: solid 2px #FEAF17;
  border-radius: 1px;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 35px;
  width: auto;
  elevation: 3;
`

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16;
  font-family: 'normal';
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
  text-transform: uppercase;
  font-weight: bold;
`

export const PlantWrapper = styled.View`
  height: auto;
  width: auto;
`

// export const QuizBlankField = styled.field`
//   color: #ffffff;
// `

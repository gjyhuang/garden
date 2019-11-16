import styled from 'styled-components';

// export const styles = StyleSheet.create({
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
// });

export const Container = styled.View`
  flex: 1;
  background-color: #018C96;
  align-items: center;
  justify-content: center;
`

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

export const BodyText = styled.Text`
  color: #ffffff;
  font-size: 20;
  font-family: 'sans-serif-thin';
`

export const Divider = styled.View`
  height: 20px;
`

export const OrangeButton = styled.Button`
  color: #ffffff;
  background-color: #FEAF17;
  border: solid 2px #FEAF17;
  margin: 0.5rem;
`

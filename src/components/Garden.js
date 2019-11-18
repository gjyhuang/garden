import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Container, TitleH2, BodyText, Button, Divider, ShopDiv, CenterWrap, SubheaderText, PopupTextDark, PlantWrapper, Header, ButtonWrap, PointsDiv, ItemDiv } from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Garden extends Component {
  constructor() {
    super();
    this.state = {
      isEmpty: true,
      points: 100,
      garden: {},
      shop: [
        {
          id: 1,
          name: 'Orange Tree Sapling',
          type: 'orange_tree',
          lv: 1,
          img: require('../../assets/img/orange_tree01.png')
        },
        {
          id: 2,
          name: 'Orange Tree',
          type: 'orange_tree',
          lv: 2,
          img: require('../../assets/img/orange_tree02.png')
        },
      ]
    }
  }

  handleShopPurchase() {
    this.setState({
      isEmpty: false,
      points: 0,
      garden: {
        id: 1,
        name: 'Orange Tree Sapling',
        type: 'orange_tree',
        lv: 1,
        img: require('../../assets/img/orange_tree01.png')
      }
    });
    console.log(this.state.garden)
  }

  render() {
    const shop = (
      <ShopDiv>
        <PopupTextDark>Your garden is empty - let's try growing your first sapling!</PopupTextDark>
        <Divider />
          <TouchableOpacity
            onPress={() => this.handleShopPurchase()}>
            <ItemDiv>
              <Image
                source={this.state.shop[0].img}
                style={{height: 100, width: 100}}
              />
              <View>
                <PopupTextDark>Cost: 100</PopupTextDark>
              </View>
              <Image
                source={require('../../assets/img/sun.png')}
                style={{height: 40, width: 40, marginLeft: 5}}
              />
            </ItemDiv>
          </TouchableOpacity>
      </ShopDiv>
      )

    const orangeSapling = (
      <PlantWrapper>
        <Image
          source={this.state.shop[0].img}
          style={{height: 200, width: 200, marginTop: 20, marginLeft: -5}}
        />
      </PlantWrapper>
    )

    let firstDisplay = this.state.isEmpty ? shop : <Text />;
    let plantDisplay = this.state.isEmpty ? <Text /> : orangeSapling;

    return (
      <Container>
        <ImageBackground source={require('../../assets/img/grid.png')} style={{width: '100%', height: '100%', zIndex: -1,}}>
          <Divider />
          <CenterWrap>
            <Header>My garden</Header>
            <PointsDiv>
              <SubheaderText>Current points: {this.state.points}</SubheaderText>
              <Image
                source={require('../../assets/img/sun.png')}
                style={{height: 40, width: 40, marginLeft: 5}}
              />
            </PointsDiv>
            {firstDisplay}
            {plantDisplay}
          </CenterWrap>
        </ImageBackground>
      </Container>
    )
  }
}

export default Garden;

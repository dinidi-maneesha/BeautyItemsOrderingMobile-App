import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import {PrimaryButton} from '../components/Button';
import LottieView from 'lottie-react-native';

export default class LoadingScreen extends Component {
  Onpress = () => {
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/photoshopScreen/welcome.png')}>
        <View
          style={{
            marginTop: -10,
            marginBottom: -400,
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: '80%',
              height: '80%',
              resizeMode: 'contain',
            }}
            source={require('../assets/photoshopScreen/Logo.png')}
          />
        </View>
        <View style={{marginTop: 2, marginBottom: 50}}>
          <PrimaryButton onPress={this.Onpress} title="Get Started" />
        </View>
      </ImageBackground>
    );
  }
}

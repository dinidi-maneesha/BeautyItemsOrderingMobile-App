import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';


export default function Pay({navigation}) {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/photoshopScreen/pay.png')}>
      <SafeAreaView>
        <View style={{alignItems: 'center', marginTop: 430}}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 55,
              marginRight: 55,
              textAlign: 'center',
              justifyContent:'center',
            }}>
            Ability to pay cash Upon receipt of items.also include a delivery
            fee to it.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{alignItems: 'flex-end', marginTop: 115}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 30,
              marginRight: 35,
              color: 'black',
            }}>
            Done
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

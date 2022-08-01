import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Deliveryboy({navigation}) {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/photoshopScreen/Delivery.png')}>
      <SafeAreaView>
        <LottieView
          style={{height: 350, alignSelf: 'center', marginTop: 28}}
          source={require('../assets/animations/delivery.json')}
          autoPlay
          speed={0.5}
        />
        <View style={{alignItems: 'center', marginTop: 45}}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 30,
              marginRight: 30,
              textAlign: 'center',
            }}>
            Deliver the items safely to Your home as soon as{''}
            possible depend on{''} the distance to your order.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Pay')}
          style={{alignItems: 'flex-end', marginTop: 115}}>
          <Image
            style={{
              width: 40,
              height: 40,
              marginLeft: 30,
              marginRight: 30,
            }}
            source={require('../assets/icons/next.png')}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

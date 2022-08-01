import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

const items = [
  {
    image: require('../../assets/images/lips.png'),
    text: 'Lipstick',
  },
  {
    image: require('../../assets/images/nail-Polish.png'),
    text: 'Nail Polish',
  },
  {
    image: require('../../assets/images/makeup.png'),
    text: 'Makeup item',
  },
  {
    image: require('../../assets/images/earrings.png'),
    text: 'Earrings',
  },
  {
    image: require('../../assets/images/Wallet.png'),
    text: 'Wallet',
  },
  {
    image: require('../../assets/images/pin.png'),
    text: 'Hair Pins',
  },
];

export default function Categories({navigation}) {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('BeautyItems')}>
            <View style={{alignItems: 'center', marginRight: 30}}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{fontSize: 13, fontWeight: '900'}}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

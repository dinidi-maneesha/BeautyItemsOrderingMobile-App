import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function SkinBtn() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          marginTop: 25,
          backgroundColor: '#f7e8f1',
          alignItems: 'center',
          padding: 15,
          borderRadius: 10,
          width: 320,
          position: 'relative',
          shadowOpacity: 80,
          elevation: 15,
        }}
        onPress={() => navigation.navigate('Skin')}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: '600',
            marginRight: 40,
          }}>
          Click and choose your skin
        </Text>
        <Image
          source={require('../../assets/images/skincare.png')}
          style={{
            position: 'absolute',
            right: 20,
            width: 35,
            height: 55,
            top: 2,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

import React from 'react';
import {Text, SafeAreaView} from 'react-native';

export default function Skinheader() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#d4a3da',
        paddingVertical: 10,
        paddingLeft: 20,
        marginBottom: -6,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      }}>
      <Text
        style={{
          marginTop: 10,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: 10,
        }}>
        What is your skin type 🤔 ?
      </Text>
    </SafeAreaView>
  );
}

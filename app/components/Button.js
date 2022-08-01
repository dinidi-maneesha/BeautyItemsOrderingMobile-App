import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#9087dc',
    width: 230,
    height: 56,
    marginLeft: 58,
    marginRight: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 90,
    elevation: 15,
    

  },

  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export {PrimaryButton};

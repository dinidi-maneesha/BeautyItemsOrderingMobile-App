import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';


export default function BottomTabs() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('BeautyItems')}>
        <Icon icon="receipt" text="Orders" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon icon="home" text="Home" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Account')}>
        <Icon icon="user" text="Account" />
      </TouchableOpacity>
    </View>
  );
}

const Icon = props => (
  <View>
    <FontAwesome5
      name={props.icon}
      color="#3b1e32"
      size={22}
      style={{marginBottom: 3, alignSelf: 'center'}}
    />
    <Text>{props.text}</Text>
  </View>
);

import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function HederTabs() {
  const [activetab, setActiveTab] = React.useState('Delivery');
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButton
        text="Delivery"
        btncolor="black"
        textcolor="#efd4ec"
        activetab={activetab}
        setActiveTab={setActiveTab}
      />

      <HeaderButtonPickUp
        text="PickUp"
        btncolor="#efd4ec"
        textcolor="black"
        activetab={activetab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activetab === props.text ? 'black' : '#efd4ec',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => {
        props.setActiveTab(props.text);
        navigation.navigate('Deliveryboy');
      }}>
      <Text
        style={{
          color: props.activetab === props.text ? '#efd4ec' : 'black',
          fontSize: 15,
          fontWeight: '900',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const HeaderButtonPickUp = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activetab === props.text ? 'black' : '#efd4ec',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => {
        props.setActiveTab(props.text);
        navigation.navigate('BeautyItems');
      }}>
      <Text
        style={{
          color: props.activetab === props.text ? '#efd4ec' : 'black',
          fontSize: 15,
          fontWeight: '900',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

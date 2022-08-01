import React from 'react';
import {View, Text, Image} from 'react-native';
import About from '../components/ShopDetails/About';
import Items from '../components/ShopDetails/Items';
import ViewCart from '../components/ShopDetails/ViewCart';

export default function ShopDetails({route, navigation}) {
  return (
    <View>
      <About route={route} />
      <Items />
      <ViewCart navigation={navigation} />
    </View>
  );
}

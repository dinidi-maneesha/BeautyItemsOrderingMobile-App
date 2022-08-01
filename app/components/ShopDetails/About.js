import React from 'react';
import {View, Text, Image} from 'react-native';



export default function About(props) {
  const {name, image, price, reviews, rating, categories} = props.route.params;

  const formattedCategories = categories.map(cat => cat.title).join(' • ');

  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <ShopImage image={image} />
      <ShopName name={name} />
      <ShopDescription description={description} />
    </View>
  );
}

const ShopImage = props => (
  <Image source={{uri: props.image}} style={{width: '100%', height: 100}} />
);

const ShopName = props => (
  <Text
    style={{
      fontSize: 23,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
      color: 'black',
    }}>
    {props.name}
  </Text>
);

const ShopDescription = props => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15.5,
    }}>
    {props.description}
  </Text>
);

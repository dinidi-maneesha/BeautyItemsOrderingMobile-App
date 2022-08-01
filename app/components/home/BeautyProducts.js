/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const localBeautyProducts = [
  {
    name: 'Beauty Lover Matara',
    image_url:
      'https://quintessenceblog.com/wp-content/uploads/2016/07/Beautycounter-on-Nantucket.jpg',
    categories: ['beauty shop', 'Lover'],
    price: 'RS',
    reviews: 1244,
    rating: 4.9,
  },
  {
    name: 'Beauty Lover Akurassa',
    image_url:
      'https://www.weekendnotes.com/im/003/09/yuki-house-japanese-korean-makeup-bourke-st1.jpg',
    categories: ['beauty shop', 'Lover'],
    price: 'RS',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Beauty Lover Deniyaya',
    image_url:
      'https://cdn-design.amorepacific.com/contents/2020/08/13222145/Landing_Content1-1.jpg',
    categories: ['beauty shop', 'Lover'],
    price: 'RS',
    reviews: 1244,
    rating: 3.7,
  },
];

export default function BeautyProducts({navigation, ...props}) {
  return (
    <>
      {props.shopData.map((shop, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          style={{marginTop: 15}}
          onPress={() =>
            navigation.navigate('ShopDetails', {
              name: shop.name,
              image: shop.image_url,
              price: shop.price,
              reviews: shop.reviews,
              rating: shop.rating,
              categories: shop.categories,
            })
          }>
          <View
            key={index}
            style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}>
            <BeautyImage image={shop.image_url} />
            <BeautyInfo name={shop.name} rating={shop.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const BeautyImage = props => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{width: '100%', height: 180}}
    />
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
      <Icon name="heart-outline" color="white" size={30} />
    </TouchableOpacity>
  </>
);

const BeautyInfo = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: '#95889d'}}>
        {props.name}
      </Text>
      <Text style={{fontSize: 13, color: 'gray'}}>every beauty Products</Text>
    </View>
    <View
      style={{
        backgroundColor: '#faf1f8',
        height: 25,
        width: 40,
        alignItems: 'center',
        borderRadius: 15,
      }}>
      <Text> {props.rating} </Text>
    </View>
  </View>
);

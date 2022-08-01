import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';

const beautyItems = [
  {
    title: ' korean style earrings ',
    description: 'Big Double Flower drop Earings',
    price: '357.00',
    image:
      'https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHfc00ff22d12c4766b235eb0c5dafde6e5.jpg_480x480.jpg_.webp',
  },
  {
    title: ' korean style earrings ',
    description: 'Wind Flower Earrings',
    price: '400.00',
    image:
      'https://img.joomcdn.net/b906cabb01b94a711fb66a3cc0ee6e7c823e7db7_original.jpeg',
  },

  {
    title: ' korean style earrings ',
    description: 'Tessel Earrings',
    price: '750.00',
    image:
      'https://i.pinimg.com/564x/f8/6c/2a/f86c2a8e2c24ba6d16273f9c07d3a5a7.jpg',
  },
  {
    title: ' lipstick ',
    description: 'OnColour Matte Lipstick ',
    price: '780.00',
    image:
      'https://media-asia-cdn.oriflame.com/-/media/images/externalImage.ashx?externalMediaId=product-management-media%2f39803%2f39803_2.png%3fversion%3d1609783200&w=534&q=70',
  },
  {
    title: ' lipstick ',
    description: 'Lipsatin Lipstick ',
    price: '950.00',
    image:
      'https://inglotusa.com/19090-large_default/lipsatin-lipstick-red-kiss.jpg',
  },
  {
    title: ' Glitter Nail Polish ',
    description: ' Oriflame',
    price: '220.00',
    image:
      'https://cdn.shopify.com/s/files/1/0222/9924/products/ultima_silver_holographic_nail_polish_unique_grande.jpg?v=1531067136',
  },
  {
    title: ' Marrun Glitter NailPolish ',
    description: 'Karma ',
    price: '300.00',
    image:
      'https://d1duy8jr72udoh.cloudfront.net/wp-content/uploads/2015/02/picture-polish-karma-holographic-nail-polish.png',
  },
  {
    title: 'pink small Wallet',
    description: 'Hand made',
    price: '500.00',
    image:
      'https://ae01.alicdn.com/kf/HTB1E.57XsfrK1RkSnb4q6xHRFXaa/New-purse-short-women-s-purse-long-thin-lovely-zipper-small-pocket-wallet-student-style-card.jpg',
  },
  {
    title: 'Blue Small Wallet ',
    description: 'lether',
    price: '800.00',
    image:
      'https://ae01.alicdn.com/kf/HTB1sEw.wr5YBuNjSspoq6zeNFXaJ/Luxury-Brand-Cute-mini-wallet-Ladies-Short-Leather-Wallets-Womens-Wallets-and-Purses-Wallet-Women-Card.jpg',
  },
  {
    title: 'Black Wallet ',
    description: 'lether',
    price: '450.00',
    image: 'https://img1.junaroad.com/uiproducts/9566695/pri-1445357222.jpg',
  },

  {
    title: ' Marrun Glitter NailPolish ',
    description: 'OnColour',
    price: '800.00',
    image:
      'https://d1duy8jr72udoh.cloudfront.net/wp-content/uploads/2015/02/picture-polish-karma-holographic-nail-polish.png',
  },
];

const styles = StyleSheet.create({
  ItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
    marginBottom: 20,
  },

  titleStyle: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },

  descriptionStyle: {
    marginLeft: 10,
    color: 'black',
  },
  priceStyle: {
    marginLeft: 10,
    color: 'black',
  },
});

export default function Items(ShopName) {

  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: {...item, ShopName: ShopName, checkboxValue: checkboxValue},
    });

  const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

  const isbeautyItemInCart = (beautyItem, cartItems) =>
    Boolean(cartItems.find(item => item.title === beautyItem.title)); 

    
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {beautyItems.map((beautyItem, index) => (
        <View key={index}>
          <View style={styles.ItemStyle}>
            <BouncyCheckbox
              iconStyle={{
                borderColor: '#b289b0',
                borderRadius: 0,
                marginLeft: 20,
              }}
              fillColor="#bc8ff2"
              onPress={checkboxValue => selectItem(beautyItem, checkboxValue)}
              isChecked={isbeautyItemInCart(beautyItem, cartItems)}
            />
            <ItemInfo beautyItem={beautyItem} />
            <ItemImage beautyItem={beautyItem} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{marginHorizontal: 20}}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const ItemInfo = props => (
  <View style={{width: 240, justifyContent: 'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.beautyItem.title}</Text>
    <Text style={styles.descriptionStyle}>{props.beautyItem.description}</Text>
    <Text style={styles.priceStyle}>RS.{props.beautyItem.price}</Text>
  </View>
);

const ItemImage = props => (
  <View>
    <Image
      source={{uri: props.beautyItem.image}}
      style={{width: 100, height: 100, borderRadius: 8}}
    />
  </View>
);
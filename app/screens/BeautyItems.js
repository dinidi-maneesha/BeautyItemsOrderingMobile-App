import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CatItems from '../components/ItemCatagory/CatItems';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Cart from '../components/ItemCatagory/Cart';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import Bottom from '../components/home/Bottom';

const items = [
  {
    image: require('../assets/images/lips.png'),
    text: 'LIPSTICK',
  },

  {
    image: require('../assets/images/nail-Polish.png'),
    text: 'NAIL POLISH',
  },
  {
    image: require('../assets/images/makeup.png'),
    text: 'MAKEUP ITEMS',
  },
  {
    image: require('../assets/images/earrings.png'),
    text: 'EARRINGS',
  },
  {
    image: require('../assets/images/Wallet.png'),
    text: 'WALLETS',
  },
  {
    image: require('../assets/images/pin.png'),
    text: 'HAIR PINS',
  },
];

const Card = ({cat}) => {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

  const isbeautyItemInCart = () =>
    Boolean(cartItems.find(item => item.title === cat.title));

  return (
    <View style={style.cardContainer}>
      <View style={style.cardImageContainer}>
        <Image
          source={cat.image}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={style.cardDetailsContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
            {cat?.title}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 13, marginTop: 4}}>{cat?.type}</Text>
          <Text style={{fontSize: 13, marginTop: 4}}>Rs.{cat?.price}</Text>
        </View>
      </View>
      <View>
        <BouncyCheckbox
          iconStyle={{
            borderColor: '#bc8ff2',
            borderRadius: 0,
            marginLeft: 20,
          }}
          fillColor="#bc8ff2"
          onPress={checkboxValue => selectItem(cat, checkboxValue)}
          isChecked={isbeautyItemInCart(cat, cartItems)}
        />
      </View>
    </View>
  );
};

const BeautyItems = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const [fliteredCat, setfliteredCat] = React.useState([]);

  const fliterCat = index => {
    const currentCat = CatItems.filter(
      item => item?.cat?.toUpperCase() == items[index].text,
    )[0]?.CatItems;
    setfliteredCat(currentCat);
  };
  React.useEffect(() => {
    fliterCat(0);
  }, []);

  const ListCategories = () => {
    return (
      <View
        style={{
          marginTop: 15,
          paddingVertical: 10,
          paddingLeft: 20,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <View
              key={'cat' + index}
              style={{alignItems: 'center', marginRight: 30}}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedCategoryIndex(index);
                  fliterCat(index);
                }}
                style={[
                  style.categoryBtn,
                  {
                    backgroundColor:
                      selectedCategoryIndex == index ? '#ffc2ea' : '#ffff',
                  },
                ]}>
                <Image
                  source={item.image}
                  style={{
                    width: 50,
                    height: 40,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 13, fontWeight: '900'}}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{backgroundColor: '#9087dc', padding: 15}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bold',
          }}>
          Items category
        </Text>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        data={fliteredCat}
        renderItem={({item}) => <Card cat={item} navigation={navigation} />}
      />
      <View>
        <Cart navigation={navigation} />
      </View>
      <Bottom/>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryBtn: {
    height: 45,
    width: 100,
    marginRight: 5,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  cardContainer: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: '#ffff',
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: 150,
    width: 130,
    backgroundColor: '#eee',
    borderRadius: 20,
  },
});

export default BeautyItems;

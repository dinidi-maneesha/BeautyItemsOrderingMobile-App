import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import HederTabs from '../components/home/HeaderTabs';
import SkinBtn from '../components/home/SkinBtn';
import Categories from '../components/home/Categories';
import BeautyProducts, {
  localBeautyProducts,
} from '../components/home/BeautyProducts';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/home/Bottom';

export default function Home({navigation}) {
  const [shopData, setShopdata] = React.useState(localBeautyProducts);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: '#efd4ec', padding: 15}}>
        <HederTabs />
        <SkinBtn />
      </View>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/photoshopScreen/Pinkdown.png')}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories navigation={navigation} />
          <View
            style={{
              marginTop: 10,
              paddingVertical: 10,
              paddingLeft: 20,
              marginBottom: -12,
            }}>
            <Text
              style={{
                marginTop: 10,
                textAlign: 'center',
                color: 'black',
                fontSize: 15,
                fontWeight:'bold',
              }}>
              Free Delivery Prodct CLick Shops 👇{' '}
            </Text>
          </View>
          <BeautyProducts shopData={shopData} navigation={navigation} />
        </ScrollView>
        <Divider width={1} />
      </ImageBackground>
      <BottomTabs />
    </SafeAreaView>
  );
}

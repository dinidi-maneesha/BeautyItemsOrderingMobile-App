import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Skinheader from '../components/Skin/SkinHeader';
import Bottom from '../components/home/Bottom';

export default function Skin() {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/images/4.png')}>
        <View>
          <Skinheader />
        </View>
        {/* nomal skin btn*/}

        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              marginTop: 25,
              backgroundColor: '#c79bbf',
              alignItems: 'center',
              padding: 15,
              borderRadius: 10,
              width: 220,
              position: 'relative',
              shadowOpacity: 80,
              elevation: 15,
            }}
            onPress={() => navigation.navigate('nomalSkin')}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                marginRight: 40,
              }}>
              Nomal Skin
            </Text>
            <Image
              source={require('../assets/icons/skin3.png')}
              style={{
                position: 'absolute',
                right: 20,
                width: 35,
                height: 53,
                top: 2,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* dry skin btn*/}

        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            marginLeft: 120,
          }}>
          <TouchableOpacity
            style={{
              marginTop: 25,
              backgroundColor: '#f7e8f1',
              alignItems: 'center',
              padding: 15,
              borderRadius: 10,
              width: 200,
              position: 'relative',
              shadowOpacity: 80,
              elevation: 15,
            }}
            onPress={() => navigation.navigate('drySkin')}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                marginRight: 40,
              }}>
              Dry Skin
            </Text>
            <Image
              source={require('../assets/icons/skin4.png')}
              style={{
                position: 'absolute',
                right: 20,
                width: 35,
                height: 53,
                top: 2,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* acne skin btn*/}

        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            marginLeft: 50,
          }}>
          <TouchableOpacity
            style={{
              marginTop: 25,
              backgroundColor: '#c79bbf',
              alignItems: 'center',
              padding: 15,
              borderRadius: 10,
              width: 200,
              position: 'relative',
              shadowOpacity: 80,
              elevation: 15,
            }}
            onPress={() => navigation.navigate('anceSkin')}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                marginRight: 40,
              }}>
              Acne Skin
            </Text>
            <Image
              source={require('../assets/icons/skin1.png')}
              style={{
                position: 'absolute',
                right: 20,
                width: 35,
                height: 53,
                top: 2,
              }}
            />
          </TouchableOpacity>
        </View>

        {/*oily skin*/}

        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <TouchableOpacity
            style={{
              marginTop: 25,
              backgroundColor: '#f7e8f1',
              alignItems: 'center',
              padding: 15,
              borderRadius: 10,
              width: 200,
              position: 'relative',
              shadowOpacity: 80,
              elevation: 15,
            }}
            onPress={() => navigation.navigate('oilySkin')}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                marginRight: 40,
              }}>
              Oily Skin
            </Text>
            <Image
              source={require('../assets/icons/skin2.png')}
              style={{
                position: 'absolute',
                right: 20,
                width: 35,
                height: 53,
                top: 2,
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View>
        <Bottom />
      </View>
    </>
  );
}

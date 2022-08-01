import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import LoadingScreen from '../screens/LoadingScreen';
import BeautyItems from '../screens/BeautyItems';
import ShopDetails from '../screens/ShopDetails';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from '../redux/store';
import OrderCompleted from '../screens/OrderCompleted';
import Skin from '../screens/Skin';
import nomalSkin from '../screens/nomalSkin';
import drySkin from '../screens/drySkin';
import oilySkin from '../screens/oilySkin';
import anceSkin from '../screens/anceSkin';
import SignIn from '../screens/LoginScreen';
import SignUp from '../screens/SignupScreen';
import Account from '../screens/Account';
import Deliveryboy from '../screens/Deliveryboy';
import Pay from '../screens/Pay';


const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoadignScreen"
          screenOptions={screenOptions}>
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Deliveryboy" component={Deliveryboy} />
          <Stack.Screen name="Pay" component={Pay} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="BeautyItems" component={BeautyItems} />
          <Stack.Screen name="ShopDetails" component={ShopDetails} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
          <Stack.Screen name="Skin" component={Skin} />
          <Stack.Screen name="nomalSkin" component={nomalSkin} />
          <Stack.Screen name="drySkin" component={drySkin} />
          <Stack.Screen name="oilySkin" component={oilySkin} />
          <Stack.Screen name="anceSkin" component={anceSkin} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
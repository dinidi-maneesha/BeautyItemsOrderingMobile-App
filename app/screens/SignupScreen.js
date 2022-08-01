import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignup = async () => {
    if (!email || !password) {
      Alert.alert('please all all the fields');
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      messaging()
        .getToken()
        .then(token => {
          firestore().collection('usertoken').add({
            token: token,
          });
        });
    } catch (err) {
      console.log(err);
      Alert.alert('something went wrong please try different password');
    }
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/photoshopScreen/signup.png')}>
      <KeyboardAvoidingView behavior="position">
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#302c2c',
              marginBottom: 20,
              marginTop: 190,
              marginLeft: 10,
            }}>
            Sign Up
          </Text>
        </View>
        <View style={styles.box2}>
          <TextInput
            label="Email"
            value={email}
            mode="outlined"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            label="password"
            value={password}
            mode="outlined"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <Button
            mode="contained"
            style={{marginTop: 30}}
            onPress={() => userSignup()}>
            Signup
          </Button>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <Text style={{color: '#808080', fontWeight: 'bold', fontSize: 16}}>
              Alredy have an account.
            </Text>
            <TouchableOpacity
              style={styles.btnSignUp}
              onPress={() => navigation.navigate('SignIn')}>
              <Text
                style={{color: '#9c3796', fontWeight: 'bold', fontSize: 18}}>
                {' '}
                Sign in{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  box2: {
    paddingHorizontal: 40,
    height: '50%',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  text: {
    fontSize: 22,
  },
});

export default SignupScreen;

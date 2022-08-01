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
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = async () => {
    if (!email || !password) {
      Alert.alert('please all all the fields');
      return;
    }
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      console.log(result.user);
      navigation.replace('Home');
    } catch (err) {
      Alert.alert('something went wrong please try different password');
    }
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/photoshopScreen/signin.png')}>
      <KeyboardAvoidingView behavior="position">
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#302c2c',
              marginBottom: 15,
              marginTop: 230,
              marginLeft: 40,
            }}>
            Log in
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
            onPress={() => userLogin()}>
            Login
          </Button>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <Text style={{color: '#808080', fontWeight: 'bold', fontSize: 16}}>
              Don`t have an account ?
            </Text>
            <TouchableOpacity
              style={styles.btnSignUp}
              onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={{color: '#9c3796', fontWeight: 'bold', fontSize: 18}}>
                {' '}
                Sign up{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  box1: {
    alignItems: 'center',
    marginTop: 180,
  },
  box2: {
    paddingHorizontal: 40,
    height: '50%',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 22,
  },
});

export default LoginScreen;

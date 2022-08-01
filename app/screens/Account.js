import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Account = ({navigation}) => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/photoshopScreen/ADDcrop.png')}>
      <SafeAreaView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{paddingHorizontal: 20, flex: 1, marginTop: 255}}>
        <View
          style={{
            marginTop: -80,
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#302c2c',
              marginBottom: 20,
            }}>
            Account
          </Text>
        </View>
        <View style={{marginTop: -20}}>
          <View style={styles.input}>
            <TextInput placeholder="Name" style={styles.inputcontent} />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Phone Number"
              style={styles.inputcontent}
              secureTextEntry
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Address"
              style={styles.inputcontent}
              secureTextEntry
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.btnPrimary}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Submit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Account;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    marginTop: 20,
    color: '#dcd7dc',
  },
  inputcontent: {
    color: 'white',
    paddingLeft: 30,
    borderBottomWidth: 2,
    borderColor: '#bd8bf2',
    // eslint-disable-next-line no-dupe-keys
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  btnPrimary: {
    backgroundColor: '#aeb0f2',
    height: 60,
    width: 300,
    borderRadius: 10,
    marginLeft: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  btnSignUp: {
    height: 25,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
});

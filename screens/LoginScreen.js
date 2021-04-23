import React from 'react';
import {View, Button} from 'react-native';
import styleLoginScreen from '../styles/styleLoginScreen';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styleLoginScreen.screen}>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('BottomNavigation');
        }}
      />
    </View>
  );
};

export default LoginScreen;

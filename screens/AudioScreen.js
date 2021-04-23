import React from 'react';
import {View, Text} from 'react-native';
import styleAudioScreen from '../styles/styleLoginScreen';

const AudioScreen = ({navigation}) => {
  return (
    <View style={styleAudioScreen.screen}>
      <Text>Audio Screen</Text>
    </View>
  );
};

export default AudioScreen;

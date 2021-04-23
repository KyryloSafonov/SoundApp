import React from 'react';
import {View, Text, Button} from 'react-native';
import styleAudioScreen from '../styles/styleLoginScreen';
import SoundPlayer from 'react-native-sound-player';

const AudioScreen = ({navigation}) => {
  const Play = () => {
    try {
      // SoundPlayer.playSoundFile('tone', 'mp3');
      SoundPlayer.playUrl(
        'https://music.youtube.com/watch?v=ibc3bFHNbdg&list=LM',
      );
    } catch (e) {
      console.log('cannot play the sound file', e);
    }
  };
  return (
    <View style={styleAudioScreen.screen}>
      <Button title="Play" onPress={Play} />
      <Button title="Pause" />
    </View>
  );
};

export default AudioScreen;

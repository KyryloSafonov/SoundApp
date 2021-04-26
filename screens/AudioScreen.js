import React, {useState, useEffect} from 'react';
import {View, Text, Button, PermissionsAndroid} from 'react-native';
import styleAudioScreen from '../styles/styleLoginScreen';
import SoundPlayer from 'react-native-sound-player';
import RNFetchBlob from 'rn-fetch-blob';

const AudioScreen = ({navigation}) => {
  const startDownload = () => {
    // const {tunes, token, currentTrackIndex} = this.state;
    // let {url, name} = tunes[currentTrackIndex];
    const name = 'test2';
    const url =
      'https://file-examples.com/index.php/sample-audio-files/sample-mp3-download/';
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'mp3',
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        title: name,
        path: RNFetchBlob.fs.dirs.DownloadDir + `${name}`, // Android platform
        description: 'Downloading the file',
      },
    })
      .fetch('GET', url)
      .then(res => {
        console.log('res', res);
        console.log('The file is save to ', res.path());
      });
  };

  const requestToPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Music',
          message: 'App needs access to your Files... ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('startDownload...');
        startDownload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestToPermissions();
  }, []);

  return <Text>Hello World</Text>;
};

export default AudioScreen;

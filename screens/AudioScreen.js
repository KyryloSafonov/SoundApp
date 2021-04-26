import React, {useState, useEffect} from 'react';
import {View, Text, Button, PermissionsAndroid, StyleSheet} from 'react-native';
import styleAudioScreen from '../styles/styleLoginScreen';
import SoundPlayer from 'react-native-sound-player';
import RNFetchBlob from 'rn-fetch-blob';
import TrackPlayer from 'react-native-track-player';

const AudioScreen = ({navigation}) => {
  const [data, setData] = useState(null);

  const playButtonHandler = url => {
    return () => {
      const dirs = RNFetchBlob.fs.dirs.DocumentDir;
      let file_url = url;
      let file_path = `${dirs}/player-offline-sample.mp3`;
      console.log(`Ready to download to ${file_path}`);
      RNFetchBlob.config({path: file_path})
        .fetch('GET', file_url, {})
        .then(res => {
          console.log(`File downloaded to ${file_path}`);
          TrackPlayer.setupPlayer().then(() => {
            let track = {
              id: 'try',
              url: file_path,
              title: 'try artist',
              artist: 'artist',
            };
            TrackPlayer.add([track]).then(function () {
              console.log('Track Added Created');
              TrackPlayer.play();
            });
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  };

  const stopButtonHandler = () => {
    TrackPlayer.pause();
  };

  const downloadAndPlay = url => {
    const dirs = RNFetchBlob.fs.dirs.DocumentDir;
    let file_url = url;
    let file_path = `${dirs}/player-offline-sample.mp3`;
    console.log(`Ready to download to ${file_path}`);
    RNFetchBlob.config({path: file_path})
      .fetch('GET', file_url, {})
      .then(res => {
        console.log(`File downloaded to ${file_path}`);
        TrackPlayer.setupPlayer().then(() => {
          let track = {
            id: 'try',
            url: file_path,
            title: 'try artist',
            artist: 'artist',
          };
          TrackPlayer.add([track]).then(function () {
            console.log('Track Added Created');
            TrackPlayer.play();
          });
        });
      })
      .catch(function (error) {
        console.log(error);
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
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch('https://control.neurobodygym.com/api/demo')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
    // requestToPermissions();
    // downloadAndPlay(
    //   'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3',
    // );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.tracksList}>
        {data
          ? data.map((e, index) => (
              <View key={index} style={styles.track}>
                <Text
                  style={styles.trackTitle}>{`Track number: ${index + 1}`}</Text>
                <View style={styles.ButtonsWrapper}>
                  <View style={styles.playButton}>
                    <Button
                      color="#00E676"
                      title="Play"
                      onPress={playButtonHandler(
                        `https://control.neurobodygym.com/api/demo/${e.mediaIdList[0]}/download`,
                      )}
                    />
                  </View>
                  <View style={styles.pauseButton}>
                    <Button
                      color="#f44336"
                      title="Stop"
                      onPress={stopButtonHandler}
                    />
                  </View>
                </View>
              </View>
            ))
          : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  track: {
    alignItems: 'center',
  },
  trackTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  ButtonsWrapper: {
    flexDirection: 'row',
  },
  playButton: {
    height: 80,
    width: 130,
  },
  pauseButton: {
    height: 80,
    width: 130,
    marginLeft: 20,
  },
});

export default AudioScreen;

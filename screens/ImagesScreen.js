import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  Modal,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import CameraRoll from '@react-native-community/cameraroll';
import RNFetchBlob from 'rn-fetch-blob';

const ImagesScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalPic, setModalPic] = useState('');
  const createModalToggler = url => {
    return () => {
      setModalPic(url);
      setIsVisible(prev => !prev);
    };
  };
  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }
  const saveButtonHandler = async () => {
    if (Platform.OS === 'ios') {
      CameraRoll.save(modalPic, 'photo');
      return;
    }
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'png',
    })
      .fetch('GET', modalPic)
      .then(res => {
        CameraRoll.save(res.data, 'photo');
      });
  };

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Modal
          visible={isVisible}
          transparent={true}
          onRequestClose={() => setIsVisible(false)}>
          <ImageViewer imageUrls={[{url: modalPic}]} />
          <Button
            color="#00E676"
            title="Save to galery"
            onPress={saveButtonHandler}
          />
        </Modal>
        <ScrollView>
          <View style={styles.imagesWrapper}>
            {data.map((e, key) => (
              <TouchableOpacity
                key={e.id}
                onPress={createModalToggler(e.download_url)}>
                <Image
                  style={styles.image}
                  source={{
                    uri: e.download_url,
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
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
  imageContainer: {
    flex: 1,
  },
  imagesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    margin: 15,
    width: 100,
    height: 100,
  },
});
export default ImagesScreen;

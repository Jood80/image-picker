import { useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import ErrorBoundary from 'react-native-error-boundary';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';

import {
  Button,
  ImageViewer,
  IconButton,
  CircleButton,
  EmojiPicker,
  EmojiList,
  EmojiSticker,
} from './components';

const PlaceholderImage = require('./assets/images/background-image.png');

const ErrorFallback = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>Something happened!</Text>
    <Text style={styles.text}>{props.error.toString()}</Text>
  </View>
);

export default function App() {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const imageRef = useRef();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      console.log('you did not select an image');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    console.log('logged');
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });
      console.log(localUri);
      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert('Saved!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  if (status === null) {
    requestPermission();
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.imageContainer}>
            <View ref={imageRef} collapsable={false}>
              <ImageViewer
                placeholderImgSrc={PlaceholderImage}
                selectedImage={selectedImage}
              />
              {pickedEmoji && (
                <EmojiSticker ImageSize={40} stickerSrc={pickedEmoji} />
              )}
            </View>
          </View>

          {showAppOptions ? (
            <View style={styles.optionsContainer}>
              <View style={styles.optionsRow}>
                <IconButton icon="refresh" label="Reset" onPress={onReset} />
                <CircleButton onPress={onAddSticker} />
                <IconButton
                  icon="save-alt"
                  label="Save"
                  onPress={onSaveImageAsync}
                />
              </View>
            </View>
          ) : (
            <View style={styles.footerContainer}>
              <Button
                theme="primary"
                label="Choose a photo"
                onPress={pickImageAsync}
              />
              <Button
                label="Use this photo"
                onPress={() => setShowAppOptions(true)}
              />
            </View>
          )}
          <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
            <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
          </EmojiPicker>
          <StatusBar style="auto" />
        </SafeAreaView>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    flex: 1 / 3,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 60,
    marginHorizontal: 20,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginVertical: 16,
  },
});

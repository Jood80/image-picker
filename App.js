import {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import ErrorBoundary from 'react-native-error-boundary'

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
const PlaceholderImage = require('./assets/images/background-image.png');

const ErrorFallback = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>Something happened!</Text>
    <Text style={styles.text}>{props.error.toString()}</Text>
  </View>
)

export default function App () {
  const [selectedImage, setSelectedImage] = useState(null)
  const [showAppOptions, setShowAppOptions] = useState(false)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if(!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert("you did not select an image")
    }
  }


  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImgSrc={PlaceholderImage}
            selectedImage={selectedImage} />
        </View>

        {showAppOptions ? (
          <View />
        ) : (
          <View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
            <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
          </View>
        )}
        <StatusBar style="auto" />
      </View>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginVertical: 16
  }
});

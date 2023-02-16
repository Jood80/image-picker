import {Image, StyleSheet} from "react-native"

export default function ImageViewer ({placeholderImgSrc, selectedImage}) {

  const imgSrc = selectedImage !== null ? {uri: selectedImage} : placeholderImgSrc
  return <Image source={imgSrc} style={styles.image} />
};


const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})

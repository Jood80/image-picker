import { View, Image } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function EmojiSticker({ ImageSize, stickerSrc }) {
  const scaleImage = useSharedValue(ImageSize);

  const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleImage.value) {
        scaleImage.value *= 2;
      }
    },
  });

  const stickerStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  return (
    <View style={{ top: -350 }}>
      <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
        <AnimatedImage
          source={stickerSrc}
          resizeMode="contain"
          style={[stickerStyle, { width: ImageSize, height: ImageSize }]}
        />
      </TapGestureHandler>
    </View>
  );
}

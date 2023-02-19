import { View, Image } from 'react-native';

import Animated from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function EmojiSticker({ ImageSize, stickerSrc }) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSrc}
        resizeMode="contain"
        style={{ width: ImageSize, height: ImageSize }}
      />
    </View>
  );
}

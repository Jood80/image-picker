import { useState } from 'react';
import {
  Pressable,
  Image,
  FlatList,
  SafeAreaView,
  Platform,
  StyleSheet,
} from 'react-native';

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    require('../assets/images/emoji1.png'),
    require('../assets/images/emoji2.png'),
    require('../assets/images/emoji3.png'),
    require('../assets/images/emoji4.png'),
    require('../assets/images/emoji5.png'),
    require('../assets/images/emoji6.png'),
  ]);

  return (
    <SafeAreaView>
      <FlatList
        data={emoji}
        horizontal
        showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              onPress={() => {
                onSelect(item);
                onCloseModal();
              }}
            >
              <Image source={item} key={index} style={styles.image} />
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

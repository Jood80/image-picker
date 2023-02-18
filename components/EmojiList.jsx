import {useState} from "react";
import {
  Pressable,
  Image,
  FlatList,
  SafeAreaView,
  Platform,
} from "react-native";

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
	]);
	

  return (
    <SafeAreaView>
      <FlatList
        data={emoji}
        horizontal
        showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
        renderItem={(item, index) => {
          return (
            <Pressable
              onPress={() => {
                onSelect(item);
                onCloseModal();
              }}
            >
              <Image source={emoji} key={index} />
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}

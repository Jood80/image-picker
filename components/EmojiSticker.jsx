import {View, Image} from "react-native";

export default function EmojiSticker ({ImageSize, stickerSrc}) {
	return (
		<View style={{top: -350}}>
			<Image source={stickerSrc}
				resizeMode="contain"
				style={{width: ImageSize, height: ImageSize}}
			/>
		</View>
	)
};

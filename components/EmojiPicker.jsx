import {Modal, Pressable, Text, View} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function EmojiPicker ({isVisible, children, onClose}) {
	return(
	<Modal visible={isVisible} transparent={true} animationType="slide">
		<View>
			<View>
				<Text>Choose a sticker</Text>
				<Pressable onPress={onClose}>
					<MaterialIcons name="close" color="#fff" size={22} />
				</Pressable>
			</View>
			{children}
	</View>
	</Modal>)
};

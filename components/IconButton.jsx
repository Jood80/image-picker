import {View, Pressable, StyleSheet, Text} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


export default function IconButton ({onPress, label, icon}) {
	return (
		<View>
			<Pressable style={styles.iconButton} onPress={onPress} >
				<MaterialIcons name={icon} size={24} color="#fff" />
				<Text style={styles.iconButtonLabel}>{label}</Text>
			</Pressable>
		</View>
	)
};


const styles = StyleSheet.create({
	iconButton: {
 
	},
	iconButtonLabel: {
  
	}
})
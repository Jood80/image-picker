import {View, Pressable, StyleSheet} from "react-native";


export default function IconButton({onPress, label, icon}) {
	<View>
		<Pressable style={styles.iconButton} onPress={onPress} >
			<MaterialIcons name={icon} size={24} color="#fff" />
			<Text style={styles.iconButtonLabel}>{label}</Text>
		</Pressable>
	</View>
};


const styles = StyleSheet.create({
	iconButton: {
	
	},
	iconButtonLabel: {
		
	}
})

import {Pressable} from "react-native";
import {StyleSheet, View, Text} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";


export default function Button ({theme, label, onPress}) {
	if(theme === "primary") {
		return (
			<View style={[styles.buttonContainer, {borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18}]}>
				<Pressable
					style={[styles.button, {backgroundColor: "#fff"}]}
					onPress={onPress}>
					<FontAwesome
						name="picture-o"
						size={18}
						color="#25292e"
						style={styles.buttonIcon}
					/>
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
				</Pressable>
			</View>
		)
	}

	return (
		<View style={styles.buttonContainer}>
			<Pressable style={styles.button} onPress={() => alert("HOW DARE YOU")}>
				<Text style={styles.buttonLabel}>{label}</Text>
			</Pressable>
		</View>
	)
};


const styles = StyleSheet.create({
	buttonContainer: {
		padding: 3,
		width: 320,
		height: 68,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 20
	},
	button: {
		borderRadius: 10,
		outline: 'red',
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	buttonIcon: {
		paddingRight: 8
	},
	buttonLabel: {
		color: 'white',
		fontSize: 16,
	}
})

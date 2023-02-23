import { View, Text, StyleSheet, Pressable, Button } from 'react-native';

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is About screen</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text>Go To Home Page</Text>
      </Pressable>
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  // button: {
  //   flex: 1,
  //   borderRadius: 10,
  //   width: '100%',
  //   height: '100%',
  //   borderColor: '#ffd33d',
  //   borderWidth: 4,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection: 'row',
  // },
});

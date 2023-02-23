import { Button, View, Text, StyleSheet } from 'react-native';

export default function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> That's Details Screen</Text>
      <Button
        title="Go to About Again"
        onPress={() => navigation.push('About')}
      />
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
});

import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ErrorBoundary from 'react-native-error-boundary';
import HomeScreen from './screens/Home';

const ErrorFallback = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Something happened!</Text>
      <Text style={styles.text}>{props.error.toString()}</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginVertical: 16,
  },
});

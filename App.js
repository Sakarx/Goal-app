import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
     <View>
      <TextInput placeholder='Your course goal!'/>
      <Button title='Add Goal'/>
     </View>
     <View>
      <Text>List of goals...</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appContainer:{
    padding: 50
  }
});

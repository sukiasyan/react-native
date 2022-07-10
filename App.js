import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder='your text here' />
        <Button title='Add Goal' />
      </View>
      <View>
        <Text>List Of Goals...</Text>
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
  newStyle: {
    marginTop: 16,
    marginBottom: 16,
  },
});

import { Text, View, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalsItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalsText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalsItem: {
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    margin: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalsText: {
    color: 'white',
    padding: 8,
  },
});

import {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] =useState('')
    const [courseGoals, setCourseGoals] =useState([])

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
       setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText])
    }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your text here' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
          {courseGoals.map((goal, index)=> (
            <View  key={index} style={styles.goalsItem}>
              <Text style={styles.goalsText}>
                  {goal}
              </Text>
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
  },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: '#cccccc'
  },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 4
    },
    goalsItem: {
       borderRadius: 6,
        backgroundColor: '#5e0acc',
        margin: 8,
        padding: 8,

    },
    goalsText: {
        color: 'white'
    }
});

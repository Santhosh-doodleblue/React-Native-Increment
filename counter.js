import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrementType, incrementType} from './redux/actions/action';

const Counter = () => {
  const count = useSelector(state => state.reducerCounter.counter);
  const dispatch = useDispatch();
  // const [state, setState] = useState(0);
  // const increment = () => {
  //   setState(state + 1);
  // };
  // const decrement = () => {
  //   setState(state - 1);
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Counter Task </Text>
      <View>
        <Button onPress={() => dispatch(incrementType())} title="+" />
        {/* <TouchableOpacity onPress={increment} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity> */}
        <Text style={styles.content}>{count}</Text>
        <Button onPress={() => dispatch(decrementType())} title="-" />
        {/* <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    width: 100,
  },
  content: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
});
export default Counter;

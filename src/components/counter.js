import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementType, decrementType} from '../redux/actions/action';

const Counter = () => {
  const count = useSelector(state => state.reducerCounter.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Counter Task </Text>
      <View>
        <Button onPress={() => dispatch(incrementType())} title="+" />

        <Text style={styles.content}>{count}</Text>
        <Button onPress={() => dispatch(decrementType())} title="-" />
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

  content: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
});
export default Counter;

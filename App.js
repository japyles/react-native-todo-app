import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }])
    setIsAddMode(false)
  }

  const clearHandler = (key) => {
    setCourseGoals((goals) => goals.filter((item) => key !== item.key))
  }

  const cancelGoalAddHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler} />
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem onDelete={() => clearHandler(itemData.item.key)} title={itemData.item.value} itemData={itemData} />} 
    />
      {/* <StatusBar style="auto" /> */}
    </View>
  )
}

    const styles = StyleSheet.create({
      screen: {
        padding: 61
      },
    })
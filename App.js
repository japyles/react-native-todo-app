import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }])
  }

  const clearHandler = (key) => {
    setCourseGoals((goals) => goals.filter((item) => key !== item.key))
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
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
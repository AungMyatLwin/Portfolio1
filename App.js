import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './update/components/GoalItem';
import GoalInput from './update/components/GoalInput';

export default function App() {
  const [modalVisible, setModalVisible]=useState(false);
  const [courseGoal,setCourseGoal]=useState([]);

  function startAddGoalHandler(){
    setModalVisible(true);
  }
  function closeModalHandler(){
    setModalVisible(false)
  }

  function addGoalHandler(enteredGoalText){
    setCourseGoal(currentCourseGoal=>[...currentCourseGoal,
      {text:enteredGoalText, id:Math.random().toString()}]);
      closeModalHandler(); 
  };
  function deleteGoalHandler(id){
   setCourseGoal(currentCourseGoal=> currentCourseGoal.filter(goal=>goal.id!==id));
  }
  

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.container}>
      <Button title='Add New Goal' color="#a065ec" onPress={startAddGoalHandler}/>
    {modalVisible && <GoalInput visible={modalVisible} cancel={closeModalHandler} goalFunction={addGoalHandler} />}
     <FlatList data={courseGoal} renderItem={itemData=>{
      return( <GoalItem text={itemData.item.text} onDelete={deleteGoalHandler} id={itemData.item.id}/>
      )
     }} style={styles.goalsContainer} keyExtractor={
      (item,index)=> { return item.id;}
     }/>
    </View>
    </>
  );
}
 
const styles = StyleSheet.create({
  container:{
    padding:40,
    paddingHorizontal:16,
    flex:1,
    backgroundColor:'#1e085a'
   },
   goalsContainer:{
    flex:6,
   }
});

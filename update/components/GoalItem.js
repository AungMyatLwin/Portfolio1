import {StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props){
  // helper function

    return (
      <View style={styles.goalItem}>
        <Pressable android_ripple={{color:"#dddddd"}}
    onPress={props.onDelete.bind(this, props.id)}
    style={({pressData})=> pressData && styles.pressData}>
    <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
  </View>)
}


export default GoalItem;

const styles= StyleSheet.create({
  goalItem:{
    borderColor:'#cccccc',
    borderWidth:1,
    margin:8,
    borderRadius:6,
    backgroundColor:'#5e08ff',
    padding:8,
   },
   pressData:{
    opacity:0.5
   },
       goalText:{
        color:'white'
       }
});
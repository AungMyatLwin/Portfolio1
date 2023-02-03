import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal, Image} from "react-native";

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText]= useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
      };
    function addGoalHandler(){
        props.goalFunction(enteredGoalText);
        setEnteredGoalText('');
    }

     return(<Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../../assets/adaptive-icon.png')}/>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
        
        <View style={styles.buttonContainer}>
        <View style={styles.button}><Button title='Cancel' onPress={props.cancel} color="#f31282" /></View>
        <View style={styles.button}>
        <Button title='Add Goal' onPress={addGoalHandler} value={enteredGoalText} color="#b180f0" />
        </View>
        
        </View>
        </View>
     </Modal>);
}

export default GoalInput;

const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        // flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        padding:16,
        backgroundColor:"#311b6b"
       },image:{
        width:100,
        height:100,
        margin:20
       },
       textInput:{
        borderWidth:1,
        borderColor:'#e4d0ff',
        backgroundColor: '#e4d0ff',
        width:'100%',
        padding:16,
        color:'#120438',
        borderRadius:6
       },
       buttonContainer:{
        marginTop:16,
        flexDirection: 'row'
       },
       button:{
        width:'30%',
        marginHorizontal:8
       }
})
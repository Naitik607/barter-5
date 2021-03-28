import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'
import {SafeAreaProvider} from "react-native-safe-area-context";


export default class HomeScreen extends Component{
constructor(){
  super()
  this.state={
    userName: firebase.auth().currentUser.email,
    itemName: '',
    description: ''
  }
}

addItem=(itemName,description)=>{
  var userName = this.state.userName
  db.collection("exchange_requests").add({
    "username": userName,
    "item_name": itemName,
    "description": description
  })
  this.setState({
    itemName: '',
    description: ''
  })
  Alert.alert(
    'Item ready to exchange',
    '',
    [
      {text: 'OK', onPress : ()=>{
        this.props.navigation.navigate('HomeScreen')
      }}
    ]
  )
}
render(){
  return(
  <SafeAreaProvider>
    <View style={{flex:1}}>
     <MyHeader title = "Add Item" navigation ={this.props.navigation}/>
      <KeyboardAvoidingView style={styles.keyBoardStyle}>
         <TextInput
                style ={styles.formTextInput}
                placeholder={"Item Name"}
                onChangeText={(text)=>{
                    this.setState({
                        itemName:text
                    })
                }}
                value={this.state.itemName}
              />
        <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={8}
                placeholder={"Description"}
                onChangeText ={(text)=>{
                    this.setState({
                        description:text
                    })
                }}
                value ={this.state.description}
              />
          <TouchableOpacity style={[styles.button,{marginTop: 10}]}
          onPress={()=>{this.addItem(this.state.itemName,this.state.description)}}
          >
            <Text style={{color: '#ffff',fontSize: 18,fontWeight: 'bold'}}>Add Item</Text>
          </TouchableOpacity>   
      </KeyboardAvoidingView>
    </View>
  </SafeAreaProvider>
  )
}
}
const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab50',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)

import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../Config'
import MyHeader from '../components/MyHeader';
import {SafeAreaProvider} from "react-native-safe-area-context";

export default class HomeScreen extends Component{
  constructor(){
    super();
    this.state={
      username:  firebase.auth().currentUser.email,
      requestedExchange : []
    }
    this.requestRef = null;
  }

  getExchangeRequests=()=>{
    this.requestRef = db.collection("exchange_requests")
    .onSnapshot((snapshot)=>{
      var requestedExchange = snapshot.docs.map((doc) => doc.data())
      this.setState({
        requestedExchange: requestedExchange
      });
    })
  }

  componentDidMount(){
    this.getExchangeRequests();
  }

  componentWillUnmount(){
    this.requestRef = null;
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.item_name}
        subtitle={item.description}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'#ffff'}}>Exchange</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  } 
  render(){
    return(
      <SafeAreaProvider>
       <View style={{flex: 1}}>
       <MyHeader title="Home Screen" navigation ={this.props.navigation}/>
        <View style={{flex: 1}}>
        {
          this.state.requestedExchange.length === 0
          ?(
            <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Requested Exchange</Text>
              </View>
          )
          :(
            <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.requestedExchange}
                renderItem={this.renderItem}
              />
          )
        }
        </View>
       </View>
      </SafeAreaProvider>
    )
  }

}
const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})
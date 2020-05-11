import React,{Component} from "react";
import { StyleSheet, Text, View, Image } from "react-native";


function Email() {
  return ( 
    <View style={styles.container}>
              <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10}}>
                <Text style={{fontSize: 10,fontWeight: 'bold'}}>Name</Text>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>Body</Text>
                
              </View>
    </View>
);
} 


export default Email;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
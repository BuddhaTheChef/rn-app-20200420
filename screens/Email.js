import React,{Component} from "react";
import { StyleSheet, Text, View, Image } from "react-native";


function Email() {
  return ( 
    <View style={styles.container}>
              <View style={{flex: 1, paddingLeft: 10}}>
                <Text style={{fontSize: 10,fontWeight: 'bold'}}>Name</Text>
                <Text style={{fontSize: 10,fontWeight: 'bold'}}>Person 1</Text>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>Body</Text>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

                </Text>
                
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
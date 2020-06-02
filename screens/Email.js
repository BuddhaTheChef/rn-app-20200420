import React,{Component} from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function Email() {
  return ( 
    <View style={styles.container}>
              <View style={{flex: 1}}>
                <View style={{flex: 0, justifyContent: 'space-around', flexDirection: 'row' ,backgroundColor: 'whitesmoke',width: '100%', paddingTop: 10, paddingBottom: 10}}>
                <View style={{position: 'relative', display: 'inline'}}>
                <Image style={{width: 100, height: 100}} source={require('../assets/images/rn-1.jpg')}/>
                </View>
                <View style={{flex: 0, justifyContent: 'flex-start'}}>
                <Text style={{marginBottom: 10}}>Date: 06/25/2020 at 5:55pm</Text>
                <Text style={{marginBottom: 10,fontSize: 14,fontWeight: 'bold'}}>From: Person 1 @person1@testemailcom</Text>
                <Text style={{fontSize: 13,fontWeight: 'bold'}}>To: Person 2 @person2@testemailcom</Text>
                </View>
                </View>
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
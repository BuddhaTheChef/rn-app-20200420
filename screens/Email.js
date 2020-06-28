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
                <Text style={{marginBottom: 10,fontSize: 14,fontWeight: 'bold'}}>From: Person 1 person1@testemailcom</Text>
                <Text style={{fontSize: 13,fontWeight: 'bold'}}>To: Person 2 person2@testemailcom</Text>
                </View>
                </View>
                <View style={{flex: 0, justifyContent: 'space-around', flexDirection: 'column' ,backgroundColor: 'whitesmoke',width: '100%', paddingTop: 10, paddingBottom: 9, paddingLeft: 10, height: '70%', marginLeft: 6}}>
                  <View style={{fontSize: 12, fontWeight: 'bold', flexDirection: 'column'}}>
                <Text>Testing meeting coming up</Text>
                </View>
                <View style={{fontSize: 12, fontWeight: 'bold', width: '100%', flexDirection: 'column'}}>
                <Text>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

                </Text>
                </View>
                </View>
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
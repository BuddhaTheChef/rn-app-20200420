import React,{useState} from "react";
import { StyleSheet, Text, View,FlatList, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

function Savings() {
    const [people, setPeople] = useState([
        {name: 'shaun', amount: 200, key:1},
        {name: 'shau2',  amount: 200,key:2},
        {name: 'shaun3',  amount: 200,key:3},
        {name: 'shaun4',  amount: 200,key:4},
        {name: 'shaun5', amount: 200, key:5},
    ])
    return (
        <View>
            <View style={styles.topView}>
                <Text style={{ fontSize: 40, color: "whitesmoke", marginBottom: 20, fontWeight: '400' }}>$10,557.93</Text>
                <Text style={{ fontSize: 18, color: "whitesmoke",fontWeight:'600' }}>Total in Savings</Text>
            </View>
            <FlatList 
                data={people}
                renderItem={({item}) => (
                    <View>
                    <Text>{item.name}</Text>
                    <Text>{item.amount}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    topView: {
        alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(66,66,66)",
          height: 200,
          width: width,
          margin:0,
    }
  });

export default Savings;



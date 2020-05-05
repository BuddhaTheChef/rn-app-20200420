import React,{useState} from "react";
import { StyleSheet, Text, View,FlatList, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

function Checkings() {
    const [people, setPeople] = useState([
        {date: 'May 1', name: 'shaun', amount: 200, key:1},
        {date: 'April 20', name: 'Taco Bell Merchandise',  amount: '- $2,000.50',key:2},
        {date: 'April 16', name: 'shaun3',  amount: '$575.50',key:3},
        {date: 'April 16', name: 'shaun4',  amount: 200,key:4},
        {date: 'April 10', name: 'shaun5', amount: 200, key:5},
        {date: 'April 20', name: 'Taco Bell Merchandise',  amount: '- $2,000.50',key:6},
        {date: 'April 16', name: 'shaun3',  amount: '$575.50',key:7},
        {date: 'April 20', name: 'Taco Bell Merchandise',  amount: '- $2,000.50',key:8},
        {date: 'April 16', name: 'shaun3',  amount: '$575.50',key:9},
        {date: 'April 20', name: 'Taco Bell Merchandise',  amount: '- $2,000.50',key:10},
        {date: 'April 16', name: 'shaun3',  amount: '$575.50',key:11},
    ])
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={{ fontSize: 40, color: "whitesmoke", marginBottom: 20, fontWeight: '400' }}>$5,223.76</Text>
                <Text style={{ fontSize: 18, color: "whitesmoke",fontWeight:'600' }}>Total in Checkings</Text>
            </View>
            <FlatList 
                data={people}
                renderItem={({item}) => (
                    <View>
                        <View style={styles.dateDiv}>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>
                    <View style={styles.payDiv}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.amount}>{item.amount}</Text>
                    </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#5E72AC',
      flex: 1,
      paddingBottom: 30
    },
    topView: {
        alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(66,66,66)",
          height: 200,
          width: width,
          margin:0,
    },
    payDiv: {
        borderWidth: 0.5,
        borderColor: 'whitesmoke',
        backgroundColor: '#CDCDCD',
        borderRadius: 9,
        height: 70,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 0,
        marginLeft: 10,
        marginRight: 10,
    },
    amount: {
        color: 'rgb(66,66,66)',
        fontWeight: '400',
        fontSize: 20
    },
    name: {
        color: 'rgb(66,66,66)',
        fontWeight: '400',
        fontSize: 15
    },
    dateDiv: {
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 10
    },
    date: {
        color: 'whitesmoke',
        fontWeight: '400',
        fontSize: 20
    }
  });

export default Checkings;



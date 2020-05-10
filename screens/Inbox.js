import React,{useState} from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const { height, width } = Dimensions.get("window");

function Inbox({navigation}) {
    const [people, setPeople] = useState([
        {date: 'May 1', name: 'Dividend', amount: '$200.50', key:1, color: 'green'},
        {date: 'April 20', name: 'Taco Bell Merchandise',  amount: '- $2,000.50',key:2,color: 'red'},
        {date: 'April 16', name: 'Verve',  amount: '$575.50',key:3},
        {name: 'Best Buy',  amount: '$78.64',key:4},
        {date: 'April 10', name: 'Lyft', amount: '$134.40', key:5},
        {date: 'April 5', name: 'Taco Bell Merchandise',  amount: '- $2,000.50',key:6,color: 'red'},
        {name: 'Verve',  amount: '$575.50',key:7},
        {name: 'Rent to apartment',  amount: '- $1,999.50',key:8,color: 'red'},
        {date: 'March 30', name: 'Seattle Utilities',  amount: '$575.50',key:9},
        {date: 'March 27', name: 'Taco Bell Merchandise',  amount: '- $2,000.50',key:10,color: 'red'},
        {date: 'March 25', name: 'TRANSFER FROM CHECKINGS',  amount: '$575.50',key:11},
    ])

    var jobs = people.map(function (item) {
        return item
    });
    
    var arrayUnique = function (arr) {
        return arr.filter(function(item, index){
            return arr.indexOf(item) >= index;
        });
    };
    
    var jobsUnique = arrayUnique(jobs);

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={{ fontSize: 30, color: "whitesmoke", marginBottom: 5, fontWeight: '400' }}>INBOX</Text>
                <Text style={{ fontSize: 15, color: "whitesmoke",fontWeight:'600' }}>Recent Emails & Notifications</Text>
            </View>
            <View style={{ backgroundColor: '#CDCDCD',height: height}}>


      <TouchableOpacity
        title="Checkings"
        onPress={() => navigation.navigate("Checkings")}
        style={styles.emaillist}>
        <Text style={{marginLeft: 10, fontSize: 20, fontWeight: '500', color: 'whitesmoke'}}>Email 1</Text>
        <Text style={{marginRight: 10, fontSize: 20, fontWeight: '300', color: 'whitesmoke'}}>$5,223.76</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Savings"
        onPress={() => navigation.navigate("Savings")}
        style={styles.emaillist}>
        <Text style={{marginLeft: 10, fontSize: 20, fontWeight: '500', color: 'whitesmoke'}}>Email 2</Text>
        <Text style={{marginRight: 10, fontSize: 20, fontWeight: '300', color: 'whitesmoke'}}>$10,557.93</Text>
      </TouchableOpacity>
  
    </View>
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
          height: 100,
          width: width,
          margin:0,
    },
  
    emaillist: {
      margin:0,
      width: width,
      height: 60,
      alignItems: "center",
      flexDirection: 'row',
      justifyContent: "space-between",
      borderWidth: 0,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "#dddddd",
      backgroundColor: "#5E72AC"
    }
  });

export default Inbox;

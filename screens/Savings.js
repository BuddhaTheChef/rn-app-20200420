import React,{useState} from "react";
import { StyleSheet, Text, View,FlatList, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

function Savings() {
    const [people, setPeople] = useState([
        {date: 'May 1', name: 'Dividend', amount: '$200.50', key:1},
        {date: 'April 20', name: 'Taco Bell Merchandise',  amount: '- $2,000.50',key:2},
        {date: 'April 16', name: 'Verve',  amount: '$575.50',key:3},
        {name: 'Best Buy',  amount: '$78.64',key:4},
        {date: 'April 10', name: 'Lyft', amount: '$134.40', key:5},
        {date: 'April 5', name: 'Taco Bell Merchandise',  amount: '- $2,000.50',key:6},
        {name: 'Verve',  amount: '$575.50',key:7},
        {name: 'Rent to apartment',  amount: '- $1,999.50',key:8},
        {date: 'March 30', name: 'Seattle Utilities',  amount: '$575.50',key:9},
        {date: 'March 27', name: 'Taco Bell Merchandise',  amount: '- $2,000.50',key:10},
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
                <Text style={{ fontSize: 40, color: "whitesmoke", marginBottom: 20, fontWeight: '400' }}>$10,557.93</Text>
                <Text style={{ fontSize: 18, color: "whitesmoke",fontWeight:'600' }}>Total in Savings</Text>
            </View>
            <FlatList 
                data={jobsUnique}
                renderItem={({item}) => (
                    <View>
                        <View style={styles.dateDiv}>
                            <View style={{flex: 1}}>{item.date ? <Text style={styles.date}>{item.date}</Text> : <Text></Text>}</View>
                        
                    <View style={styles.payDiv}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.amount}>{item.amount}</Text>
                    </View>
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
    },
    date: {
        color: 'whitesmoke',
        fontWeight: '400',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 10
    }
  });

export default Savings;



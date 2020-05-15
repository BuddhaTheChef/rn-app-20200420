import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Email from "./Email";

const { height, width } = Dimensions.get("window");

function Inbox({ navigation }) {
  const [people, setPeople] = useState([
    {
      date: "May 1, 4:11 PM",
      name: "Dividend",
      amount: "$200.50",
      key: 1,
      color: "green",
      open: false,
      from: 'billnye@scienceguy.com'
    },
    {
      date: "May 1, 2:30 PM",
      name: "Taco Bell Merchandise",
      amount: "- $2,000.50",
      key: 2,
      color: "red",
      open: true,
      from: 'tom.jerry@example.com'
    },
    {
      date: "April 29",
      name: "Wow this is some news",
      amount: "$200.50",
      key: 3,
      color: "green",
      open: false,
      from: 'notascam.com'
    },
    {
      date: "April 24",
      name: "Taco Bell Merchandise",
      amount: "- $2,000.50",
      key: 4,
      color: "red",
      open: true,
      from: 'tom.jerry@example.com'
    },
    {
      date: "April 24",
      name: "Dividend",
      amount: "$200.50",
      key: 5,
      color: "green",
      open: false,
      from: 'billnye@scienceguy.com'
    },
    {
      date: "April 22",
      name: "Taco Bell Merchandise",
      amount: "- $2,000.50",
      key: 6,
      color: "red",
      open: true,
      from: 'tom.jerry@example.com'
    },
    {
      date: "April 20",
      name: "Dividend",
      amount: "$200.50",
      key: 7,
      color: "green",
      open: false,
      from: 'billnye@scienceguy.com'
    },
    {
      date: "April 18",
      name: "Taco Bell Merchandise",
      amount: "- $2,000.50",
      key: 8,
      color: "red",
      open: true,
      from: 'tom.jerry@example.com'
    },
    {
      date: "April 17",
      name: "Dividend",
      amount: "$200.50",
      key: 9,
      color: "green",
      open: false,
      from: 'billnye@scienceguy.com'
    },
    {
      date: "April 17",
      name: "Taco Bell Merchandise",
      amount: "- $2,000.50",
      key: 10,
      color: "red",
      open: true,
      from: 'tom.jerry@example.com'
    },
    {
      date: "APril 17",
      name: "Dividend",
      amount: "$200.50",
      key: 11,
      color: "green",
      open: false,
      from: 'billnye@scienceguy.com'
    },
    {
      date: "April 16",
      name: "Taco Bell Merchandise",
      amount: "- $2,000.50",
      key: 12,
      color: "red",
      open: true,
      from: 'tom.jerry@example.com'
    },
  ]);

  var jobs = people.map(function (item) {
    return item;
  });

  var arrayUnique = function (arr) {
    return arr.filter(function (item, index) {
      return arr.indexOf(item) >= index;
    });
  };

  var jobsUnique = arrayUnique(jobs);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text
          style={{
            fontSize: 30,
            marginTop: 20,
            color: "whitesmoke",
            marginBottom: 5,
            fontWeight: "400",
          }}
        >
          INBOX
        </Text>
        <Text style={{ fontSize: 15, color: "whitesmoke", fontWeight: "600" }}>
          Recent Emails & Notifications
        </Text>
      </View>
      <View style={{ backgroundColor: "#CDCDCD", height: height }}>
        <FlatList
          data={jobsUnique}
          renderItem={({ item }) => (
            <View>
              <View style={styles.dateDiv}>
                
                <TouchableOpacity
                  title="Email"
                  onPress={() => navigation.navigate("Email")}
                  style={styles.emaillist}
                  name="Email"
                >
                   {item.open === true ?<Icon name="ios-mail-open" size={20} style={{marginLeft: 10, marginTop: -15, color: 'gray'}} /> : <Icon name="ios-mail-unread" size={20} style={{marginLeft: 10, marginTop: -15}} /> }
                  <View style={{flex:1, justifyContent: 'center', flexDirection: "column" ,alignItems:'flex-start', marginTop: 0}}>
                  {item.open === true ? <Text style={styles.openEmail}>{item.name}</Text>: <Text style={styles.closeEmail}>{item.name}</Text>}
                  {item.open === true ? <Text style={styles.openEmailBy}>{item.from}</Text>: <Text style={styles.closeEmailBy}>{item.from}</Text>}
                  </View>
                </TouchableOpacity>
                <Text style={{position: 'absolute', right: 10, top: 22}}>{item.date}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5E72AC",
    flex: 1,
    paddingBottom: 100,
  },
  topView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(66,66,66)",
    height: 120,
    width: width,
    margin: 0,
  },
  emaillist: {
    margin: 0,
    color: 'black',
    width: width,
    height: 63,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  dateDiv: {
    borderWidth: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#5E72AC",
  },
  openEmail: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "300",
    color: "black",
  },
  closeEmail: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    fontWeight: "500",
    color: "black"
  },  
  openEmailBy: {
    marginRight: 0,
    fontSize: 14,
    fontWeight: "300",
    color: "black",
 
  },
  closeEmailBy: {
    marginRight: 0,
    fontSize: 14,
    fontWeight: "500",
    color: "black",
  }
});

export default Inbox;

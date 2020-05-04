import * as React from "react";
import { Button, View, Text, Dimensions, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get("window");

function Profile({ navigation }) {
  return (
    <View style={{ backgroundColor: '#CDCDCD',height: height}}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(66,66,66)",
          height: 350,
          width: width,
          margin:0,
        }}
      >
        <Text style={{ fontSize: 50, color: "whitesmoke", marginBottom: 30, fontWeight: '400' }}>
          $15,781.69
        </Text>
        <Text style={{ fontSize: 18, color: "whitesmoke",fontWeight:'600' }}>
          Combined Checkings and Savings
        </Text>
      </View>
      <View style={{backgroundColor: "#5E72AC", position: 'absolute',top: 270, width: width+10, left: -5, borderTopLeftRadius: 240, borderTopRightRadius: 240, height: 199}}>
      
        </View>
      <TouchableOpacity
        title="Checkings"
        onPress={() => navigation.navigate("Checkings")}
        style={{
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
        }}
      >
        <Text style={{marginLeft: 10, fontSize: 20, fontWeight: '500', color: 'whitesmoke'}}>Checkings</Text>
        <Text style={{marginRight: 10, fontSize: 20, fontWeight: '300', color: 'whitesmoke'}}>$5,223.76</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Savings"
        onPress={() => navigation.navigate("Savings")}
        style={{
          margin:0,
          width: width,
          height: 60,
          alignItems: "center",
          flexDirection: 'row',
          justifyContent: "space-between",
          borderWidth: 0,
          borderBottomWidth: 1,
          borderColor: "#dddddd",
          backgroundColor: "#5E72AC"
        }}
      >
        <Text style={{marginLeft: 10, fontSize: 20, fontWeight: '500', color: 'whitesmoke'}}>Savings</Text>
        <Text style={{marginRight: 10, fontSize: 20, fontWeight: '300', color: 'whitesmoke'}}>$10,557.93</Text>
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center', padding: 20, zIndex: 5, position: 'relative'}}>
      <Text style={{textAlign: 'center', fontWeight: '400', marginBottom: 20}}>Don't share your information with anyone and we will make it a priority to keep your account secure</Text>
      <Icon name={'ios-lock'} size={28} color={'rgba(0,0,0,0.7)'} />
      </View>
    </View>
  );
}
export default Profile;

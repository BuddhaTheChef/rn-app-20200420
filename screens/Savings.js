import React,{Component} from "react";
import { StyleSheet, Text, View } from "react-native";

class Savings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Savings</Text>
      </View>
    );
  }
}

export default Savings;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

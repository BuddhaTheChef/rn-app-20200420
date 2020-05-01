import React,{Component} from "react";
import { StyleSheet, Text, View, Dimensions,Button } from "react-native";
import Home from './components/Explore/Home';

const {height, width} = Dimensions.get('window');

class Profile extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: '700', padding: 10, borderColor:'#dddddd', borderWidth: 1, borderRadius: 2, backgroundColor:'red'}}>
        AJ's Profile
      </Text>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      <Home width={width} name="The Gaming PC" type="Private Room - Rec Center" price={'$20/ person'}/>
      <Home width={width} name="The Bungalo" type="Private Room - 2 Beds" price={'$82'}/>
      <Home width={width} name="All In" type="Private Room - 4 Beds" price={'$102'} />
      <Home width={width} name="Jungle Suite" type="Private Room - 1 Bed" price={'$200'}/>
      <Home width={width} name="Beach Front House" type="Private Room - 6 Beds" price={'$182'} />
      <Home width={width} name="The Crash Pad" type="Private Room - 12 Beds" price={'$50'}/>
     </View>
     </View>
    );
  }
}

export default Profile;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
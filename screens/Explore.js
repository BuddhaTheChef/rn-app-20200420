import React,{Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, StatusBar, ScrollView, Image, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './components/Explore/Category';
import Home from './components/Explore/Home';

const {height, width} = Dimensions.get('window');

class Explore extends Component {

  componentWillMount() {
    this.startHeaderHeight = 80;
    if(Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
            <View style={{ flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20, shadowOffset: {width: 0, height: 0}, shadowColor: 'black', shadowOpacity: 0.2, elevation: 1, borderRadius: 9, marginTop: Platform.OS == 'android' ? 30 : null}}>
              <Icon name="ios-search" size={20} style={{ marginRight: 10}} />
              <TextInput placeholder="Enter Text Here" placeholderTextColor="grey" style={{ flex: 1, fontWeight: '700', backgroundColor: 'white'}} />
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
              <Text style={{fontSize: 24, fontWeight: '700', padding: 20}}>
                What do you need help finding?
              </Text>
              <View style={{height: 130, marginTop: 20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('../assets/images/rn-1.jpg')} name="Home" />
                  <Category imageUri={require('../assets/images/rn-1.jpg')} name="Stuff" />
                  <Category imageUri={require('../assets/images/rn-1.jpg')} name="Friends" />
                  <Category imageUri={require('../assets/images/rn-1.jpg')} name="Experince" />
                </ScrollView>
              </View>
              <View style={{marginTop: 40, paddingHorizontal: 20}}>
                  <Text style={{fontSize: 24, fontWeight: '700'}}>
                      Introducing New Features
                  </Text>
                  <Text style={{fontWeight: '100', marginTop: 10}}>
                      A new sections with new features and added updates
                  </Text>
                  <View style={{width: width -40, height: 200, marginTop: 20}}>
                    <Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd'}} source={require('../assets/images/rn-1.jpg')}/>
                  </View>
              </View>
            </View>
            <View style={{marginTop: 40}}>
              <Text style={{fontSize: 24, fontWeight:'700', paddingHorizontal: 20}}>
                Something around the world
              </Text>
              <View style={{paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
               <Home width={width} name="The Gaming PC" type="Private Room - Rec Center" price={'$20/ person'} rating={4} />
               <Home width={width} name="The Bungalo" type="Private Room - 2 Beds" price={'$82'} rating={3.5} />
               <Home width={width} name="All In" type="Private Room - 4 Beds" price={'$102'} rating={5} />
               <Home width={width} name="Jungle Suite" type="Private Room - 1 Bed" price={'$200'} rating={4.5} />
               <Home width={width} name="Beach Front House" type="Private Room - 6 Beds" price={'$182'} rating={3.5} />
               <Home width={width} name="The Crash Pad" type="Private Room - 12 Beds" price={'$50'} rating={2} />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Explore;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
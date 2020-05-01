import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import loginBg from './assets/images/rn-2.jpg';
import logo from './assets/images/rn-3.png';

import Explore from './screens/Explore';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';
import Saved from './screens/Saved';
import Trips from './screens/Trips';

const {width: WIDTH} = Dimensions.get('window');

const AuthContext = React.createContext();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


function HomeScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (

    <Tab.Navigator>
      <Tab.Screen name="Explore" component={Explore}   options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-search" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Transfers" component={Saved}   options={{
          tabBarLabel: 'Transfers',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-heart-empty" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Deposits" component={Trips}   options={{
          tabBarLabel: 'Deposits',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-globe" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Inbox" component={Inbox}   options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-mail" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Profile" component={Profile} onPress={signOut}   options={{
          tabBarLabel: 'Accounts',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-contact" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>

    // <View>
    //   <Text>Signed in!</Text>
    //   <Button title="Sign out" onPress={signOut} />
    // </View>
  );
}

function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <ImageBackground source={loginBg} style={styles.backgroundContainer}>
    <View style={styles.logoContainer}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.logoText}>Welcome User</Text>
    </View>
    <View style={styles.inputContainer}>
      <Icon name={'ios-contact'} size={28} color={'rgba(255,255,255,0.7)'}  style={styles.inputIcon}/>
    <TextInput
        style={styles.input}
        placeholderTextColor={'rgba(255,255,255,0.7)'}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
    </View>
    
    <View style={styles.inputContainer}>
      <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'}  style={styles.inputIcon}/>
      <TextInput
        style={styles.input}
        placeholderTextColor={'rgba(255,255,255,0.7)'}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.btnEye}>
        <Icon name={'ios-eye'} size={26} color={'rgba(255,255,255,0.7)'}/>
      </TouchableOpacity>
    </View>
      
    <TouchableOpacity style={styles.btnLogin} onPress={() => signIn({ username, password })}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
   
    </ImageBackground>
  );
}

const Stack = createStackNavigator();

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: 'Welcome',
                headerShown: false,
            // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  logo: {
    width: 120,
    height: 120
  },
  logoText: {
    color: 'whitesmoke',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.45)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 37
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#5CAF53',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: 'center'
  }
});
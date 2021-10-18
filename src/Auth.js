import React from 'react'
import { View, Text } from 'react-native';
import Reports from './Reports';
import Login from './Login';
import Register from './Register';
import Otp from './Otp';
import Testshare from './Testshare';
import Message1 from './Message1';
import Message2 from './Message2';
import Profile from './Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Auth = () => {


  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Testshare" component={Testshare}  options={{title:"Testshare"}} /> */}
        <Stack.Screen name="Login" component={Login}  options={{title:"Login"}} />
        <Stack.Screen name="Message1" component={Message1}  options={{headerShown:false}} />
        <Stack.Screen name="Message2" component={Message2}  options={{headerShown:false}} />

        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{title:"Register"}}/>
        <Stack.Screen name="Otp" component={Otp} options={{title:'Otp'}} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Auth

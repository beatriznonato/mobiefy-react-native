import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeController from '../screens/Welcome/Controller/WelcomeController';
import LoginController from '../screens/Login/Controller/LoginController';
import SignUpController from '../screens/SignUp/Controller/SignUpController';
import SuccessController from '../screens/Success/Controller/SuccessController';
import HomeController from '../screens/Home/Controller/HomeController';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeController}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginController}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpController}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Success"
          component={SuccessController}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeController}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

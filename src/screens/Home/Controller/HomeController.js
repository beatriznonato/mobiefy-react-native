import React from 'react';
import {useNavigation} from '@react-navigation/native';
import HomeView from '../View/HomeView';
import {signOut} from 'firebase/auth';
import {FIREBASE_AUTH} from '../../../config/firebase';
import {Alert} from 'react-native';

const HomeController = () => {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      navigation.navigate('Login');
    } catch (error) {
      console.log('Error signing out: ', error);
      Alert.alert('Sign Out Failed', error.message);
    }
  };

  return <HomeView title="Sair" onPress={handleSignOut} />;
};

export default HomeController;

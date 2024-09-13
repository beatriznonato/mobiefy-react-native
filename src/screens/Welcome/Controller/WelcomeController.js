import React from 'react';
import {useNavigation} from '@react-navigation/native';
import WelcomeView from '../View/WelcomeView';

const WelcomeController = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Login');
  };

  return <WelcomeView title="Começar" onPress={handlePress} />;
};

export default WelcomeController;

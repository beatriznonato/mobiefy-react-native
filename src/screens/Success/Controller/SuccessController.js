import React from 'react';
import {useNavigation} from '@react-navigation/native';
import SuccessView from '../View/SuccessView';

const SuccessController = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Login');
  };

  return <SuccessView title="Fazer login" onPress={handlePress} />;
};

export default SuccessController;

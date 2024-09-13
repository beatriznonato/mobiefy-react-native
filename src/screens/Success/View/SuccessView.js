import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SuccessStyle';
import fonts from '../../../constants/fonts';
import CustomButton from '../../../components/CustomButton/CustomButton';
import SucessImg from '../../../assets/images/success.png';

const WelcomeView = props => {
  return (
    <View style={styles.container}>
      <Image source={SucessImg} style={styles.image} />

      <Text style={[fonts.heading, styles.copy]}>
        Cadastro realidazado com sucesso!
      </Text>

      <CustomButton title={props.title} onPress={props.onPress} />
    </View>
  );
};

export default WelcomeView;

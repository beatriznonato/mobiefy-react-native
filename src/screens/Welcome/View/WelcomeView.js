import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './WelcomeStyle';
import fonts from '../../../constants/fonts';
import CustomButton from '../../../components/CustomButton/CustomButton';
import WelcomeImg from '../../../assets/images/welcome.png';
import colors from '../../../constants/colors';

const WelcomeView = props => {
  return (
    <View style={styles.container}>
      <Image source={WelcomeImg} style={styles.image} />
      <View style={styles.copyContainer}>
        <Text style={[fonts.heading, styles.copy]}>
          Bem-Vindo ao <Text style={{color: colors.secondary}}>Mobiefy</Text>
        </Text>
        <Text style={[fonts.text, styles.copy]}>
          Desbloqueando viagens inteligentes com seu passaporte de mobilidade
          eficiente!
        </Text>
      </View>
      <CustomButton
        title={props.title}
        onPress={props.onPress}
        color={colors.primary}
        buttonColor={colors.secondary}
      />
    </View>
  );
};

export default WelcomeView;

import React from 'react';
import {View, Text} from 'react-native';
import styles from './HomeStyle';
import fonts from '../../../constants/fonts';
import CustomButton from '../../../components/CustomButton/CustomButton';
import colors from '../../../constants/colors';

const HomeView = props => {
  return (
    <View style={styles.container}>
      <View style={styles.copyContainer}>
        <Text style={[fonts.heading, styles.copy]}>Você está logado!</Text>
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

export default HomeView;

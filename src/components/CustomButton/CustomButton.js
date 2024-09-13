import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './CustomButtonStyle';
import fonts from '../../constants/fonts';
import colors from '../../constants/colors';

const CustomButton = props => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: props.buttonColor
            ? props.buttonColor
            : colors.primary,
        },
      ]} 
      onPress={props.onPress}>
      <Text
        style={[
          fonts.text,
          styles.text,
          {color: props.color ? props.color : colors.white},
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

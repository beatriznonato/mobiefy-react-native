import {StyleSheet} from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  heading: {
    fontFamily: 'Righteous',
    fontSize: 50,
    letterSpacing: 2,
    lineHeight: 49,
    color: colors.black,
  },
  subheading: {
    color: colors.primary,
    fontFamily: 'Righteous',
    fontSize: 33,
    lineHeight: 41,
    letterSpacing: 0.29,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 17,
    lineHeight: 25,
    color: colors.black,
  },
  inputLabel: {
    fontFamily: 'Roboto',
    fontSize: 17,
    color: colors.black,
  },
});

import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 38,
    paddingVertical: 58,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },
  copyContainer: {
    gap: 25,
    textAlign: 'center',
  },
  copy: {
    textAlign: 'center',
    color: colors.white,
  },
});

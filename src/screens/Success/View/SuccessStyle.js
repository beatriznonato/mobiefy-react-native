import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 38,
    paddingVertical: 58,
    paddingTop: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  copyContainer: {
    gap: 25,
    textAlign: 'center',
  },
  copy: {
    textAlign: 'center',
    color: colors.primary,
  },
});

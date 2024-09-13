import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 38,
    paddingVertical: 58,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 320,
    resizeMode: 'contain',
  },
  button: {
    color: colors.white,
    backgroundColor: colors.primary,
  },
  input: {
    width: '100%',
    backgroundColor: colors.brightShade,
    borderRadius: 14,
    paddingHorizontal: 10,
  },
  inputContainer: {
    width: '100%',
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
  },
  singup: {
    color: colors.primary,
    fontWeight: 800,
  },
  navigateSignUp: {
    flexDirection: 'row',
    gap: 6,
  },
});

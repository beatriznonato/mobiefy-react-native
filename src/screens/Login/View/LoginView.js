import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './LoginStyle';
import CustomButton from '../../../components/CustomButton/CustomButton';
import LoginImage from '../../../assets/images/login.png';
import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

const LoginView = props => {
  return (
    <View style={styles.container}>
      <Image source={LoginImage} style={styles.image} />

      <Text style={fonts.subheading}>Bem-vindo de volta!</Text>

      <View style={styles.inputContainer}>
        <Text style={fonts.inputLabel}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={props.email}
          onChangeText={props.onEmailChange}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={fonts.inputLabel}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={props.password}
            onChangeText={props.onPasswordChange}
            secureTextEntry={!props.isPasswordVisible}
          />
          <TouchableOpacity
            onPress={props.passwordVisibility}
            style={styles.iconContainer}>
            <Icon
              name={props.isPasswordVisible ? 'visibility-off' : 'visibility'}
              size={24}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>

      {props.loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <CustomButton title={props.title} onPress={props.onPress} />
      )}

      <View style={styles.navigateSignUp}>
        <Text style={fonts.text}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={props.navigateToSignUp}>
          <Text style={[fonts.text, styles.singup]}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginView;

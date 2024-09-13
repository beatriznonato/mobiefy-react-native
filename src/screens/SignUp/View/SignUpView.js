import React from 'react';
import {Text, View, TextInput, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './SignUpStyle';
import CustomButton from '../../../components/CustomButton/CustomButton';
import SignUpImage from '../../../assets/images/create_account.png';
import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignUpView = props => {
  return (
    <View style={styles.container}>
      <Image source={SignUpImage} style={styles.image} />

      <Text style={fonts.subheading}>Faça seu cadastro!</Text>

      <View style={styles.inputContainer}>
        <Text style={fonts.inputLabel}>Nome</Text>
        <TextInput
          style={styles.input}
          value={props.name}
          onChangeText={props.onNameChange}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={fonts.inputLabel}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={props.email}
          onChangeText={props.onEmailChange}
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
              color={colors.grey}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={fonts.inputLabel}>Confirmar Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={props.passwordConfirmation}
            onChangeText={props.onPassConfirmationChange}
            secureTextEntry={!props.isPassConfirmationVisible}
          />
          <TouchableOpacity
            onPress={props.passConfirmationVisibility}
            style={styles.iconContainer}>
            <Icon
              name={
                props.isPassConfirmationVisible
                  ? 'visibility-off'
                  : 'visibility'
              }
              size={24}
              color={colors.grey}
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
        <Text style={fonts.text}>Já tem uma conta</Text>
        <TouchableOpacity onPress={props.navigateToSignUp}>
          <Text style={[fonts.text, styles.singup]}>Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpView;

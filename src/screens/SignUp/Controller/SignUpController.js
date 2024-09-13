import React from 'react';
import SignUpView from '../View/SignUpView';
import SignUpModel from '../Model/SignUpModel';
import {FIREBASE_AUTH} from '../../../config/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {Alert} from 'react-native';

class SignUpController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      isPasswordVisible: false,
      isPassConfirmationVisible: false,
      loading: false,
    };

    // Iniciando a classe Model
    const homeModel = new SignUpModel();
    console.log(homeModel.getSomeInfo());
  }

  handleNameChange = text => {
    this.setState({name: text});
  };

  handleEmailChange = text => {
    this.setState({email: text});
  };

  handlePasswordChange = text => {
    this.setState({password: text});
  };

  handlePasswordConfirmationChange = text => {
    this.setState({passwordConfirmation: text});
  };

  handlePasswordVisibility = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  };

  handlePassConfirmationVisibility = () => {
    this.setState(prevState => ({
      isPassConfirmationVisible: !prevState.isPassConfirmationVisible,
    }));
  };

  navigateSuccess = () => {
    this.props.navigation.navigate('Success');
  };

  validatePassword = password => {
    // Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  signUp = async () => {
    const {email, password, passwordConfirmation} = this.state;

    // Check if the passwords match
    if (password !== passwordConfirmation) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    // Validate password strength
    if (!this.validatePassword(password)) {
      Alert.alert(
        'Senha fraca',
        'A senha deve ter pelo menos 8 caracteres e incluir uma letra maiúscula, uma letra minúscula, um número e um caractere especial.',
      );
      return;
    }

    this.setState({loading: true});
    try {
      const response = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password,
      );
      console.log(response);
      this.navigateSuccess();
    } catch (error) {
      console.log(error);
      Alert.alert('Cadastro falhou', error.message);
    } finally {
      this.setState({loading: false});
    }
  };

  render() {
    const {
      name,
      email,
      password,
      passwordConfirmation,
      isPasswordVisible,
      isPassConfirmationVisible,
      loading,
    } = this.state;

    return (
      <SignUpView
        name={name}
        email={email}
        password={password}
        passwordConfirmation={passwordConfirmation}
        title="Cadastrar"
        onPress={this.signUp}
        onNameChange={this.handleNameChange}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onPassConfirmationChange={this.handlePasswordConfirmationChange}
        passwordVisibility={this.handlePasswordVisibility}
        isPasswordVisible={isPasswordVisible}
        isPassConfirmationVisible={isPassConfirmationVisible}
        passConfirmationVisibility={this.handlePassConfirmationVisibility}
        navigateToSignUp={this.navigateToSignUp}
        loading={loading}
      />
    );
  }
}

export default SignUpController;

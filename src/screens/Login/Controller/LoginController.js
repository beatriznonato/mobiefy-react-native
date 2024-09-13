import React from 'react';
import LoginView from '../View/LoginView';
import LoginModel from '../Model/LoginModel';
import {FIREBASE_AUTH} from '../../../config/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {Alert} from 'react-native';

class LoginController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isPasswordVisible: false,
      loading: false,
    };

    //Iniciando a classe Model
    const homeModel = new LoginModel();
    console.log(homeModel.getSomeInfo());
  }

  handleEmailChange = text => {
    this.setState({email: text});
  };

  handlePasswordChange = text => {
    this.setState({password: text});
  };

  handlePasswordVisibility = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  };

  navigateHome = () => {
    this.props.navigation.navigate('Home');
  };

  navigateToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  signIn = async () => {
    this.setState({loading: true});
    try {
      const response = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        this.state.email,
        this.state.password,
      );
      console.log(response);
      this.navigateHome();
    } catch (error) {
      console.log(error);
      Alert.alert('Sign In failed', error.message);
    } finally {
      this.setState({loading: false});
    }
  };

  render() {
    const {email, password, isPasswordVisible, loading} = this.state;

    return (
      <LoginView
        email={email}
        password={password}
        title="Entrar"
        onPress={this.signIn}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        passwordVisibility={this.handlePasswordVisibility}
        isPasswordVisible={isPasswordVisible}
        navigateToSignUp={this.navigateToSignUp}
        loading={loading}
      />
    );
  }
}
export default LoginController;

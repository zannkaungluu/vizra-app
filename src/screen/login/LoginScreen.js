import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react'; // Importing React and useState hook
import {Styles} from './../../constants/Styles';
import {colors, Spacing} from '../../constants/theme'; // Importing theme constants
import {APP_BACKGROUND_IMAGE, CELEBRATION_IMAGE} from '../../constants/images'; // Importing images

import {CheckBox} from 'react-native-elements'; // Importing CheckBox component
import {
  APP_LOGO,
  PASSWORD_ICON,
  PASSWORD_MUTE_ICON,
  USER_ICON,
} from '../../constants/icons';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [rememberMe, setRememberMe] = useState(false); // State to handle "Remember Me" checkbox
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('HOME');
  };
  const handleSingUp=()=>{
    navigation.navigate('REGISTER');
  }

  return (
    <ImageBackground
      source={APP_BACKGROUND_IMAGE}
      style={styles.backgroundContainer}>
      {/* Background Image */}
      <View>
        <Image source={CELEBRATION_IMAGE} style={styles.partyImage} />
      </View>

      {/* Main Content Wrapper */}
      <View style={styles.mainContainer}>
        {/* Logo */}
        <View style={styles.logoWrapper}>
          <Image source={APP_LOGO} />
        </View>

        {/* Login Form */}
        <View style={styles.formWrapper}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Please login to your account.</Text>

          {/* Email Input Field */}
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.inputContainer}>
              <Image source={USER_ICON} style={styles.inputIcon} />
              <TextInput
                style={styles.inputField}
                placeholder="Enter Email Address"
                placeholderTextColor={colors.TEXT}
              />
            </View>
          </View>

          {/* Password Input Field */}
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputContainer}>
              <Image source={PASSWORD_ICON} style={styles.inputIcon} />
              <TextInput
                style={styles.inputField}
                placeholder="Enter Password"
                placeholderTextColor={colors.TEXT}
                secureTextEntry // Hides password input
              />
              <TouchableOpacity>
                <Image source={PASSWORD_MUTE_ICON} style={styles.inputIcon} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Remember Me Checkbox & Forgot Password */}
          <View style={styles.optionsContainer}>
            <View style={styles.rememberMeWrapper}>
              <CheckBox
                checked={rememberMe} // Checkbox checked state
                onPress={() => setRememberMe(!rememberMe)} // Toggle checkbox state
                checkedColor={colors.TEXT} // Checkbox color
              />
              <Text style={styles.rememberMeText}>Remember Me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View style={styles.signUpWrapper}>
            <Text style={styles.signUpPrompt}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleSingUp}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen; // Exporting LoginScreen component

const styles = StyleSheet.create({
  backgroundContainer: {...Styles.F_1, backgroundColor: colors.BACKGROUND}, // Full-screen background
  partyImage: {right: 154}, // Adjusts image position
  mainContainer: {
    position: 'absolute',
    padding: Spacing.XL,
    width: '100%',
    marginTop: 100, // Positions login form
  },
  logoWrapper: {...Styles.CET, marginBottom: Spacing.MD}, // Centers logo
  formWrapper: {marginTop: 70, padding: Spacing.SM},
  title: {...Styles.HE_LB_XL, marginBottom: Spacing.SM}, // Large heading
  subtitle: {...Styles.TE_LL_LG, marginBottom: Spacing.MD}, // Subheading text
  inputSection: {marginBottom: Spacing.MD}, // Wrapper for input fields
  inputLabel: {...Styles.HE_LB_LG, marginBottom: Spacing.SM}, // Input label
  inputContainer: {
    ...Styles.CET,
    ...Styles.ROW,
    ...Styles.inputContainer,
    marginBottom: Spacing.MD,
  },
  inputIcon: {marginRight: Spacing.SM}, // Icon spacing
  inputField: {
    ...Styles.input,
    ...Styles.TE_LL_SM,
    padding: Spacing.SM,
  },
  optionsContainer: {
    ...Styles.ROW,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.MD,
  },
  rememberMeWrapper: {...Styles.ROW, alignItems: 'center'}, // Styles Remember Me section
  rememberMeText: {...Styles.TE_LR_SM, right: Spacing.MD}, // Remember Me text
  forgotPasswordText: {...Styles.TE_LR_SM, ...Styles.underLine}, // Forgot Password link
  loginButtonWrapper: {alignItems: 'center'}, // Centers login button
  loginButtonText: {
    ...Styles.BL_LR_LG,
    backgroundColor: colors.CTA,
    borderRadius: 60,
    textAlign: 'center',
    padding: Spacing.SM,
    width: 160,
    height: 44,
    marginBottom: Spacing.MD,
  },
  signUpWrapper: {...Styles.ROW, justifyContent: 'center'}, // Centers Sign Up section
  signUpPrompt: {...Styles.TE_LL_SM}, // Normal text for Sign Up
  signUpLink: {...Styles.HE_LB_SM, ...Styles.underLine}, // Underlined Sign Up link
});

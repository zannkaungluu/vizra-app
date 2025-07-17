import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import {APP_BACKGROUND_IMAGE, CELEBRATION_IMAGE} from '../../constants/images'; // Restoring original image names
import {Styles} from '../../constants/Styles';
import {colors, Spacing} from '../../constants/theme';
import {
  APPLE_ICON,
  BACK_ICON,
  EMAIL_ICON,
  PASSWORD_ICON,
  PASSWORD_HIDE_ICON,
  PASSWORD_SHOW_ICON,
  FACEBOOK_ICON,
  GOOGLE_ICON,
  USER_ICON,
} from '../../constants/icons'; // Restoring original icon names
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to previous screen
  }; 
  const handleLogin = () => {
    navigation.navigate('LOGIN');
  };

  return (
    <ImageBackground
      source={APP_BACKGROUND_IMAGE} // Corrected image name
      style={styles.backgroundContainer}>
      {/* Celebration Image */}
      <Image source={CELEBRATION_IMAGE} style={styles.partyImage} /> {/* Corrected image name */}

      {/* Header with Back Button and Title */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Image source={BACK_ICON} style={styles.backIcon} /> {/* Corrected icon name */}
        </TouchableOpacity>
        <Text style={styles.titleText}>Register</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formWrapper}>
        {/* Username Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>User Name</Text>
          <View style={styles.inputFieldContainer}>
            <Image source={USER_ICON} style={styles.inputIcon} /> {/* Corrected icon name */}
            <TextInput
              style={styles.inputField}
              placeholder="Enter User Name"
              placeholderTextColor={colors.TEXT}
            />
          </View>
        </View>

        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputFieldContainer}>
            <Image source={EMAIL_ICON} style={styles.inputIcon} /> {/* Corrected icon name */}
            <TextInput
              style={styles.inputField}
              placeholder="Enter Email Address"
              placeholderTextColor={colors.TEXT}
            />
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputFieldContainer}>
            <Image source={PASSWORD_ICON} style={styles.inputIcon} /> {/* Corrected icon name */}
            <TextInput
              style={styles.inputField}
              placeholder="Enter Password"
              placeholderTextColor={colors.TEXT}
              secureTextEntry
            />
            <Image source={PASSWORD_HIDE_ICON} /> {/* Corrected icon name */}
          </View>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <View style={styles.inputFieldContainer}>
            <Image source={PASSWORD_ICON} style={styles.inputIcon} /> {/* Corrected icon name */}
            <TextInput
              style={styles.inputField}
              placeholder="Confirm Your Password"
              placeholderTextColor={colors.TEXT}
              secureTextEntry
            />
            <Image source={PASSWORD_SHOW_ICON} /> {/* Corrected icon name */}
          </View>
        </View>

        {/* Terms and Conditions Checkbox */}
        <View style={styles.termsWrapper}>
          <CheckBox
            checked={agreeToTerms}
            onPress={() => setAgreeToTerms(!agreeToTerms)}
            checkedColor={colors.CTA}
            uncheckedColor={colors.TEXT}
          />
          <Text style={styles.agreementText}>Agree with </Text>
          <TouchableOpacity>
            <Text style={styles.termsText}>Terms and Conditions</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Social Login Options */}
        <View style={styles.dividerWrapper}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Or sign up with</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.socialButtonsWrapper}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={GOOGLE_ICON} /> {/* Corrected icon name */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={APPLE_ICON} /> {/* Corrected icon name */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={FACEBOOK_ICON} /> {/* Corrected icon name */}
          </TouchableOpacity>
        </View>

        {/* Login Redirect */}
        <View style={styles.loginRedirectWrapper}>
          <Text style={styles.loginPrompt}>Already have an account? </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  backgroundContainer: {...Styles.F_1, backgroundColor: colors.BACKGROUND},
  partyImage: {right: 154},
  headerWrapper: {
    position: 'absolute',
    ...Styles.ROW,
    justifyContent: 'space-between',
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 20,
    left: Spacing.MD,
    marginTop: Spacing.SM,
    backgroundColor: colors.TRANSLUCENT,
    ...Styles.CET,
  },
  backIcon: {width: 24, height: 24},
  titleText: {...Styles.CTA_IB_LG, left: 130, marginTop: Spacing.LG},
  formWrapper: {
    position: 'absolute',
    padding: Spacing.XL,
    width: '100%',
    marginTop: 170,
  },
  inputWrapper: {marginBottom: Spacing.SM},
  inputLabel: {...Styles.HE_LB_SM, marginBottom: Spacing.SM},
  inputFieldContainer: {
    ...Styles.CET,
    ...Styles.ROW,
    ...Styles.inputContainer,
    marginBottom: Spacing.MD,
  },
  inputIcon: {marginRight: Spacing.SM},
  inputField: {...Styles.input, ...Styles.TE_LL_SM, padding: Spacing.SM},
  termsWrapper: {...Styles.ROW, ...Styles.CET, marginBottom: Spacing.SM},
  agreementText: {...Styles.TE_LL_SM},
  termsText: {...Styles.HE_LB_SM, ...Styles.underLine},
  signUpButton: {alignItems: 'center'},
  signUpButtonText: {
    ...Styles.BL_LR_LG,
    backgroundColor: colors.CTA,
    borderRadius: 60,
    textAlign: 'center',
    padding: Spacing.SM,
    width: 160,
    height: 44,
    marginBottom: Spacing.XL,
  },
  dividerWrapper: {...Styles.ROW, ...Styles.CET, marginBottom: Spacing.MD},
  divider: {flex: 0.3, height: 1, backgroundColor: colors.TEXT},
  dividerText: {...Styles.TE_LL_SM, marginHorizontal: Spacing.SM},
  socialButtonsWrapper: {
    ...Styles.ROW,
    ...Styles.CET,
    marginBottom: Spacing.MD,
  },
  socialButton: {padding: Spacing.SM},
  loginRedirectWrapper: {...Styles.ROW, justifyContent: 'center'},
  loginPrompt: {...Styles.TE_LL_SM},
  loginLink: {...Styles.HE_LB_SM, ...Styles.underLine},
});
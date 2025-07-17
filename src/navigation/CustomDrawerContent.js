import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {colors, Spacing} from '../constants/theme';
import {Styles} from '../constants/Styles';
import {Image} from 'react-native-elements';
import {
  BACK_ICON,
  EMAIL_ICON,
  FAQ_ICON,
  LANGUAGE_ICON,
  LOGOUT_ICON,
  SETTINGS_ICON,
  USER_ICON,
} from '../constants/icons';
import { useNavigation } from '@react-navigation/native';

const {height} = Dimensions.get('window'); // Get full screen height

const CustomDrawerContent = (props) => {
    const navigation = useNavigation();
    const toggleDrawer = () => {
        props.navigation.toggleDrawer();
      };
      const handleLogout = () => {
        // Replace with actual logout logic
        navigation.navigate('LOGIN');
      };
  return (
    <View style={styles.fullScreenContainer}>
      {/* Actual Drawer Content */}
      <View style={styles.drawerContainer}>
        <TouchableOpacity style={styles.backIconContainer} onPress={toggleDrawer}>
          <Image source={BACK_ICON} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.drawerContentContainer}>
          <TouchableOpacity style={styles.drawerTextContainer}>
            <Image source={USER_ICON} style={styles.icon} />
            <Text style={styles.text}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerTextContainer}>
            <Image source={LANGUAGE_ICON} style={styles.icon} />
            <Text style={styles.text}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerTextContainer}>
            <Image source={EMAIL_ICON} style={styles.icon} />
            <Text style={styles.text}>Content Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerTextContainer}>
            <Image source={FAQ_ICON} style={styles.icon} />
            <Text style={styles.text}>FAQS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerTextContainer}>
            <Image source={SETTINGS_ICON} style={styles.icon} />
            <Text style={styles.text}>Setting</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.drawerTextContainer} onPress={handleLogout}>
            <Image source={LOGOUT_ICON} style={styles.icon} />
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <View style={styles.footerTextContainer}>
            <Text style={styles.versionText}>Version 1.0.</Text>
            <Text style={styles.versionText}>All rights reserved.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  fullScreenContainer: {
    ...Styles.F_1,
  },
  drawerContainer: {
    backgroundColor: colors.BACKGROUND,
    width: 236,
    height: height, // Ensure it covers full height
    padding: 20,
  },
  backIconContainer: {
    width: 44,
    height: 44,
    backgroundColor: colors.TRANSLUCENT,
    borderRadius: 20,
    ...Styles.CET,
  },
  drawerContentContainer: {marginTop: 150},
  drawerTextContainer: {...Styles.ROW, paddingVertical: Spacing.MD},
  icon: {width: 24, height: 24},
  text: {...Styles.TE_LL_LG, marginLeft: 30},
  footerContainer:{marginTop:100},
  line: {backgroundColor: colors.WHITE, height: 1},
  footerTextContainer:{padding:Spacing.XS},
  versionText: {...Styles.TE_LL_SM},
});

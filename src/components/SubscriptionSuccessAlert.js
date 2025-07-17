// SubscriptionSuccessAlert.js
import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ImageBackground } from 'react-native';
import { colors, Spacing } from '../constants/theme';
import { Styles } from '../constants/Styles';
import { NOTIBACKGROUND } from '../constants/images';
import { Image } from 'react-native';
import { TRUE_ICON } from '../constants/icons';

const SubscriptionSuccessAlert = ({ visible, onConfirm }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onConfirm}
    >
      <ImageBackground source={NOTIBACKGROUND} style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
            <Image source={TRUE_ICON} Image={styles.imageContainer}/>
          <Text style={styles.title}>Subscribed</Text>
          <Text style={styles.message}>You have successfully subscribed this video. Video is unlocked!</Text>
          <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.buttonText}>Confirmed</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    ...Styles.F_1,
    ...Styles.CET,
    backgroundColor: colors.TRANSLUCENT,
  },
  modalContainer: {
    width: 300,
    height: 273,
    backgroundColor: colors.BACKGROUND,
    padding: Spacing.MD,
    borderRadius: Spacing.MD,
    ...Styles.CET,
  },
  imageContainer:{width:40, height:40},
  title: {
    ...Styles.CTA_IB_LG,
    marginBottom: Spacing.SM,
  },
  message: {
    ...Styles.TE_IR_MD,
    textAlign: 'center',
    marginBottom: Spacing.XS,
  },
  confirmButton: {
    width: 200,
    height: 44,
    backgroundColor: colors.CTA,
    borderRadius: Spacing.LG,
    ...Styles.CET,
    marginTop: Spacing.XL,
  },
  buttonText: {
    ...Styles.BL_IR_MD,
  },
});

export default SubscriptionSuccessAlert;
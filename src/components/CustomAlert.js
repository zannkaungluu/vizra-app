// CustomAlert.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { colors, Spacing } from '../constants/theme';
import { Styles } from '../constants/Styles';
import SubscriptionSuccessAlert from './SubscriptionSuccessAlert'; // Import the success alert

const CustomAlert = ({ visible, onClose, onSubscribe }) => {
  const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false);

  const handleSubscribe = () => {
    setIsSuccessAlertVisible(true); // Show the success alert
    onSubscribe(); // Trigger any additional subscription logic
  };

  const handleConfirmSuccess = () => {
    setIsSuccessAlertVisible(false); // Close the success alert
    onClose(); // Close the main alert
  };

  return (
    <>
      <Modal
        transparent={true}
        visible={visible}
        animationType="fade"
        onRequestClose={onClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Video Locked</Text>
            <Text style={styles.message}>This video is locked!</Text>
            <Text style={styles.message}>Please login or subscribe to view.</Text>

            <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscribe}>
              <Text style={styles.buttonText}>Subscribe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Success Alert */}
      <SubscriptionSuccessAlert
        visible={isSuccessAlertVisible}
        onConfirm={handleConfirmSuccess}
      />
    </>
  );
};
export default CustomAlert;
const styles = StyleSheet.create({
  modalOverlay: {
    ...Styles.F_1,
    ...Styles.CET,
    backgroundColor: colors.TRANSLUCENT,
  },
  modalContainer: {
    width: 300,
    height: 226,
    backgroundColor: colors.BACKGROUND,
    padding: Spacing.MD,
    borderRadius: Spacing.MD,
    ...Styles.CET,
  },
  title: {
    ...Styles.CTA_IB_LG,
    marginBottom: Spacing.SM,
  },
  message: {
    ...Styles.TE_IR_MD,
    textAlign: 'center',
  },
  subscribeButton: {
    ...Styles.F_1,
    width: 160,
    height: 44,
    backgroundColor: colors.CTA,
    borderRadius: Spacing.LG,
    ...Styles.CET,
    marginTop: Spacing.XL,
  },
  cancelButton: {
    flex: 1,
    marginLeft: Spacing.XS,
    backgroundColor: colors.SECONDARY,
    padding: Spacing.SM,
    borderRadius: Spacing.LG,
    alignItems: 'center',
  },
  buttonText: {
    ...Styles.BL_IR_MD,
  },
  cancelText: {
    ...Styles.TE_IR_MD,
  },
});

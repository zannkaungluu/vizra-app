import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomAlert from './CustomAlert';
import { colors, Spacing } from '../constants/theme';
import { Styles } from '../constants/Styles';
import {
  NEXT_ICON,
  SUBSCRIPTION_LOCK_ICON,
  FREE_PLAN_ACTIVE_ICON,
  PASSWORD_UNLOCK_ICON,
} from '../constants/icons';
import useVideoHandler from '../hooks/useVideoHandler';

const MiniVideoCard = ({ artist, title, image, locked, videoId }) => {
  const {
    isAlertVisible,
    setIsAlertVisible,
    isSubscribed,
    handleVideoCardPress,
    handleSubscribe,
  } = useVideoHandler();

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => handleVideoCardPress(videoId, title, artist, locked)}
      >
        <Image source={{ uri: image }} style={styles.imageCard} />
        <View style={styles.detailsContainer}>
          <Text style={styles.artist}>{artist}</Text>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.iconContainer}>
            {locked ? (
              isSubscribed ? (
                <Image source={PASSWORD_UNLOCK_ICON} style={styles.unlockIcon} />
              ) : (
                <Image source={SUBSCRIPTION_LOCK_ICON} style={styles.lockIcon} />
              )
            ) : (
              <Image source={FREE_PLAN_ACTIVE_ICON} style={styles.freeIcon} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image source={NEXT_ICON} style={styles.nextIcon} />
        </TouchableOpacity>
      </TouchableOpacity>

      <CustomAlert
        visible={isAlertVisible}
        onClose={() => setIsAlertVisible(false)}
        onSubscribe={handleSubscribe}
      />
    </>
  );
};

export default MiniVideoCard;


const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 100,
    backgroundColor: colors.TRANSLUCENT,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 12,
  },
  imageCard: {
    width: 80,
    height: 80,
    borderRadius: Spacing.XS,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
  },
  artist: { ...Styles.TE_IR_SM },
  title: { ...Styles.CTA_IR_MD },
  iconContainer: {
    marginTop: Spacing.XS,
    borderRadius: 20,
    width: 28,
    height: 28,
    ...Styles.CET,
  },
  unlockIcon: { width: 24, height: 24 },
  lockIcon: { width: 40, height: 28 },
  freeIcon: { width: 50, height: 28 },
  nextIcon: { width: 24, height: 24 },
});

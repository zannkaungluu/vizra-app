import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, Spacing} from '../constants/theme';
import {Styles} from '../constants/Styles';
import {
  MENU_ICON,
  SUBSCRIPTION_LOCK_ICON,
  PASSWORD_UNLOCK_ICON,
  FREE_PLAN_ACTIVE_ICON,
} from '../constants/icons';
import CustomAlert from './CustomAlert';

const MiniVideoScreenCard = ({title, image, time, mb, locked, videoId}) => {
  const navigation = useNavigation();
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleVideoCardPress = () => {
    if (locked && !isSubscribed) {
      setIsAlertVisible(true); // Show alert for locked videos
    } else {
      navigation.navigate('VIDEO', {videoId, title}); // Pass title
    }
  };

  const handleSubscribe = () => {
    console.log('Subscribe button pressed');
    setIsSubscribed(true);
    setIsAlertVisible(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handleVideoCardPress}>
        <Image source={{uri: image}} style={styles.imageCard} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.timeContainer}>
            <Text style={styles.videoTime}>{time}</Text>
            <Text style={styles.mbText}>{mb}</Text>
          </View>
          <TouchableOpacity style={styles.lockContainer}>
            {locked ? (
              isSubscribed ? (
                <Image
                  source={PASSWORD_UNLOCK_ICON}
                  style={styles.unlockIcon}
                />
              ) : (
                <Image
                  source={SUBSCRIPTION_LOCK_ICON}
                  style={styles.lockIcon}
                />
              )
            ) : (
              <Image source={FREE_PLAN_ACTIVE_ICON} style={styles.freeIcon} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image source={MENU_ICON} style={styles.nextIcon} />
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Custom Alert */}
      <CustomAlert
        visible={isAlertVisible}
        onClose={() => setIsAlertVisible(false)}
        onSubscribe={handleSubscribe}
      />
    </>
  );
};

export default MiniVideoScreenCard;

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 100,
    backgroundColor: colors.TRANSLUCENT,
    borderRadius: 20,
    ...Styles.ROW,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 12, // Space between items
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
  title: {
    ...Styles.CTA_IR_MD,
  },
  timeContainer: {
    ...Styles.ROW,
    justifyContent: 'space-between',
  },
  videoTime: {
    ...Styles.TE_IR_SM,
  },
  mbText: {
    ...Styles.TE_IR_SM,
    marginRight: 80,
  },
  lockContainer: {
    marginTop: Spacing.XS,
    borderRadius: 20,
    width: 28,
    height: 28,
  },
  lock: {
    width: 40,
    height: 28,
  },
  nextIcon: {
    width: 24,
    height: 24,
  },
});

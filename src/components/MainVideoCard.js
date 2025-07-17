import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {Styles} from '../constants/Styles';
import {colors, Spacing} from '../constants/theme';
import {FREE_PLAN_ICON, PASSWORD_UNLOCK_ICON, SUBSCRIPTION_ICON} from '../constants/icons';
import CustomAlert from './CustomAlert';
import useVideoHandler from '../hooks/useVideoHandler';

const MainVideoCard = ({artist, title, image, locked, videoId}) => {
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
        onPress={() => handleVideoCardPress(videoId, title, artist, locked)}>
        <View style={styles.cardContainer}>
          <Image source={{uri: image}} style={styles.imageCard} />
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.artist}>{artist}</Text>
          </View>
          <View style={styles.lockContainer}>
            {locked ? (
              isSubscribed ? (
                <Image
                  source={PASSWORD_UNLOCK_ICON}
                  style={styles.unlockIcon}
                />
              ) : (
                <Image
                  source={SUBSCRIPTION_ICON}
                  style={styles.lockIcon}
                />
              )
            ) : (
              <Image source={FREE_PLAN_ICON} style={styles.freeIcon} />
            )}
          </View>
        </View>
      </TouchableOpacity>

      <CustomAlert
        visible={isAlertVisible}
        onClose={() => setIsAlertVisible(false)}
        onSubscribe={handleSubscribe}
      />
    </>
  );
};

export default MainVideoCard;

const styles = StyleSheet.create({
  container: {...Styles.CET, paddingTop: Spacing.SM},
  cardContainer: {
    width: 320,
    height: 220,
    backgroundColor: colors.TRANSLUCENT,
    borderRadius: Spacing.LG,
    padding: 8,
    justifyContent: 'space-between',
    alignItems:'center',
  },
  imageCard: {width: 300, height: 200, borderRadius: Spacing.LG},
  titleContainer: {
    position: 'absolute',
    width: 280,
    height: 68,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.SM,
    backgroundColor: colors.TRANSLUCENT,
    ...Styles.ROW,
    bottom: Spacing.MD,
  },
  title: {...Styles.WH_IR_LG},
  artist: {...Styles.WH_IR_SM},
  lockContainer: {},
  cardIcon: {},
});

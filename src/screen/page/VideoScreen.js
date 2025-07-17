import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import {useNavigation, useRoute} from '@react-navigation/native';
import {APP_BACKGROUND_IMAGE, CELEBRATION_IMAGE} from '../../constants/images';
import {Styles} from '../../constants/Styles';
import {colors, Spacing} from '../../constants/theme';
import {BACK_ICON} from '../../constants/icons';
import MiniVideoScreenCardWithCategory from '../../components/MiniVideoScreenCardWithCategory';

const VideoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {videoId, title, artist} = route.params; // Get params from navigation

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to previous screen
  };

  return (
    <ImageBackground source={APP_BACKGROUND_IMAGE} style={styles.container}>
      <Image source={CELEBRATION_IMAGE} style={styles.imageContainer} />

      <View style={styles.contentContainer}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={handleBackPress}
            style={styles.backIconContainer}>
            <Image source={BACK_ICON} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Playing</Text>
        </View>

        {/* Video Player */}
        <View style={styles.videoContainer}>
          <Video
            source={videoId} // Use the passed video URL
            style={styles.videoPlayer}
            controls={true}
            resizeMode="contain"
          />
        </View>

        {/* Show dynamic title and artist */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>
          <View style={styles.divider} />
          <Text style={styles.cardHeader}>Songs You May Like</Text>
        </View>
      </View>

      <View style={styles.songCardContainer}>
        <MiniVideoScreenCardWithCategory />
      </View>
    </ImageBackground>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {...Styles.F_1, backgroundColor: colors.BACKGROUND},
  contentContainer: {
    ...Styles.F_1,
    position: 'absolute',
    marginTop: Spacing.MD,
  },
  headerContainer: {...Styles.ROW, alignItems: 'center'},
  imageContainer: {right: 154},
  backIconContainer: {
    width: 44,
    height: 44,
    backgroundColor: colors.TRANSLUCENT,
    borderRadius: 30,
    ...Styles.CET,
    marginLeft: Spacing.SM,
  },
  backIcon: {width: 24, height: 24},
  headerText: {...Styles.CTA_IB_LG, marginLeft: 120},
  videoContainer: {...Styles.CET},
  videoPlayer: {
    width: 330,
    height: 216,
    marginTop: Spacing.LG,
    marginLeft: Spacing.SM,
  },
  titleContainer: {padding: Spacing.MD},
  title: {...Styles.CTA_IR_LG},
  artist: {...Styles.TE_IR_SM},
  divider: {height: 1, backgroundColor: colors.TEXT, marginTop: Spacing.LG},
  cardHeader: {...Styles.CTA_IB_LG, padding: Spacing.XS},
  songCardContainer: {...Styles.F_1, bottom: 50, ...Styles.CET},
});

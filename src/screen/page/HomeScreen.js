import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Styles} from '../../constants/Styles';
import {colors, Spacing} from '../../constants/theme';
import Header from '../../components/Header';
import {APP_BACKGROUND_IMAGE, CELEBRATION_IMAGE} from '../../constants/images';
import MainVideoCard from '../../components/MainVideoCard';
import MiniVideoCardWithCategory from '../../components/MiniVideoCardWithCategory';
import MainVideoCardWithCategory from '../../components/MainVideoCardWithCategory';
import {videoData} from '../../data/videoData'; // Import existing videoData

const {width, height} = Dimensions.get('screen');
const HomeScreen = () => {
  // Find the video with id:1
  const mainVideo = videoData.find(video => video.id === '1');

  // State to toggle between MainVideoCardWithCategory & MiniVideoCardWithCategory
  const [showMiniVideos, setShowMiniVideos] = useState(false);

  return (
    <ImageBackground source={APP_BACKGROUND_IMAGE} style={styles.container}>
      <View style={{...Styles.F_1, marginRight: Spacing.LG}}>
        <View>
          <Image source={CELEBRATION_IMAGE} style={styles.imageContainer} />
        </View>
        <View style={styles.headingContainer}>
          <Header />
          <View style={styles.headerTextContainer}>
            <Text style={styles.HeaderText}>Recommended For You</Text>
            {mainVideo && (
              <MainVideoCard
                artist={mainVideo.artist}
                title={mainVideo.title}
                image={mainVideo.image}
                videoId={mainVideo.url}
              />
            )}
          </View>
          <View style={styles.secondHeaderContainer}>
            <Text style={styles.secondHeader}>Popular Now</Text>
            <TouchableOpacity
              onPress={() => setShowMiniVideos(!showMiniVideos)}>
              <Text style={styles.viewAllText}>
                {showMiniVideos ? 'Show Less' : 'View All'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Conditionally render either MainVideoCardWithCategory or MiniVideoCardWithCategory */}
        <View style={styles.miniVideoContainer}>
          {showMiniVideos ? (
            <MainVideoCardWithCategory />
          ) : (
            <MiniVideoCardWithCategory />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {...Styles.F_1, backgroundColor: colors.BACKGROUND},
  imageContainer: {right: 154},
  headingContainer: {position: 'absolute'},
  headerTextContainer: {
    paddingVertical: Spacing.MD,
    paddingHorizontal: Spacing.MD,
  },
  HeaderText: {...Styles.CTA_IB_LG},
  secondHeaderContainer: {
    ...Styles.ROW,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.MD,
  },
  secondHeader: {...Styles.CTA_IB_LG},
  viewAllText: {...Styles.WH_IR_MD, right: Spacing.LG},
  miniVideoContainer: {...Styles.F_1, ...Styles.CET, paddingTop: Spacing.SM},
});

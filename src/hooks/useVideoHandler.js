import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const useVideoHandler = () => {
  const navigation = useNavigation();
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleVideoCardPress = (videoId, title, artist, locked) => {
    if (locked && !isSubscribed) {
      setIsAlertVisible(true); // Show alert if the video is locked
    } else {
      navigation.navigate('VIDEO', { videoId, title, artist }); // Navigate with parameters
    }
  };

  const handleSubscribe = () => {
    console.log('Subscribe button pressed');
    setIsSubscribed(true);
    setIsAlertVisible(false);
  };

  return {
    isAlertVisible,
    setIsAlertVisible,
    isSubscribed,
    handleVideoCardPress,
    handleSubscribe,
  };
};

export default useVideoHandler;

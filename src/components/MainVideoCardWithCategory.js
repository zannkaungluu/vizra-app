import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { videoData } from '../data/videoData';
import MainVideoCard from './MainVideoCard';

const MainVideoCardWithCategory = () => {
  return (
    <FlatList
      data={videoData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MainVideoCard
          artist={item.artist}
          title={item.title}
          image={item.image}
          locked={item.locked}
          videoId={item.url} // Ensure videoId is passed
        />
      )}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
      style={styles.flatList}
    />
  );
};

export default MainVideoCardWithCategory;

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  flatList: {
    height: 300,
  },
});

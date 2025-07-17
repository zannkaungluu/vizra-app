import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import MiniVideoCard from './MiniVideoCard';
import { videoData } from '../data/videoData';

const MiniVideoCardWithCategory = () => {
  return (
    <FlatList
      data={videoData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MiniVideoCard
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

export default MiniVideoCardWithCategory;

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  flatList: {
    height: 300,
  },
});
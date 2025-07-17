import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { videoData } from '../data/videoData';
import MiniVideoScreenCard from './MiniVideoScreenCard';

const MiniVideoScreenCardWithCategory = () => {
  return (
    <FlatList
      data={videoData}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <MiniVideoScreenCard
          title={item.title}
          image={item.image}
          time={item.time}
          mb={item.mb}
          locked={item.locked}
          videoId={item.url} // Pass videoId for navigation
        />
      )}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false} // Hide scrollbar
      style={styles.flatList} // Set fixed height
    />
  );
};

export default MiniVideoScreenCardWithCategory;

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  flatList: {
    height: 300,
  },
});

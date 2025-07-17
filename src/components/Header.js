import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Styles } from '../constants/Styles';
import { colors, Spacing } from '../constants/theme';
import { NOTIFICATION_ICON, PROFILE_ICON, SEARCH_ICON } from '../constants/icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigation =useNavigation();
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    console.log(`${category} category pressed`);
    // Add your logic here for when a category is pressed
  };

  const categories = ['All', 'Pop', 'Rock', 'Hiphop'];

  return (
    <View>
      <View style={styles.headingContainer}>
        <TouchableOpacity style={styles.profileWrapper} onPress={toggleDrawer}>
          <Image source={PROFILE_ICON} style={styles.profile} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.notificationWrapper}>
          <Image source={NOTIFICATION_ICON} style={styles.notificationIcon} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}

      <View style={styles.searchBar}>
        <Image source={SEARCH_ICON} style={styles.searchIcon} />
        <TextInput
          placeholder="Let's find your vibe ..."
          placeholderTextColor={colors.TEXT}
          style={styles.input}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryWrapper,
              { backgroundColor: selectedCategory === category ? colors.CTA : colors.TRANSLUCENT }
            ]}
            onPress={() => handleCategoryPress(category)}
          >
            <Text style={[
              selectedCategory === category ? styles.selectedCategory : styles.unselectedCategory
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headingContainer: {
    ...Styles.ROW,
    alignItems: 'center',
    justifyContent:'space-between',
    marginTop: Spacing.SM,
  },
  profileWrapper: { left: Spacing.MD },
  profile: {
    width: 44,
    height: 44,
    borderRadius: 22,
    left:Spacing.SM
  },
  notificationWrapper: {
    width: 44,
    height: 44,
    borderRadius: 20,
    backgroundColor: colors.TRANSLUCENT,
    ...Styles.CET,
    right:Spacing.LG,
  },
  searchBar: {
    ...Styles.ROW,
    ...Styles.CET,
    backgroundColor: colors.TRANSLUCENT,
    borderRadius: 25,
    width: 310,
    height: 44,
    marginTop: Spacing.SM,
    left: 30,
  },
  searchIcon: { width: 24, height: 24, left: Spacing.LG },
  input: {
    ...Styles.TE_IR_MD,
    color: colors.TEXT,
    width: 320,
    height: 44,
    left: Spacing.LG,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: Spacing.SM,
    paddingHorizontal: Spacing.MD, // Add horizontal padding for better spacing
  },
  categoryWrapper: {
    width: 97,
    height: 44,
    borderRadius: 25,
    ...Styles.CET,
    marginHorizontal: Spacing.XS, // Add horizontal margin for spacing between cards
  },
  selectedCategory: {
    ...Styles.BL_IR_MD,
  },
  unselectedCategory: {
    ...Styles.TE_IR_MD,
  },
});
/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, StyleSheet, Image, View } from 'react-native';
import { COLORS, SPACING } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';

const ProfilePic = () => {
  const navigation = useNavigation();
  const buttonPressHandler = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.ImageContainer}>
      <Pressable onPress={() => buttonPressHandler()}>
        <Image
          source={require('../assets/app_images/avatar.png')}
          style={styles.Image}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});

export default ProfilePic;

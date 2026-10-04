import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import Profile from './Profile';

interface CommentProps {
  user: string;
  org: string;
  location: string;
  comment: string;
}

export default function Comment({
  user,
  org,
  location,
  comment,
}: CommentProps) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <Profile user={user} org={org} location={location} />
      <Text style={styles['text']}>{comment}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import HeartIcon from '../../assets/heart-icon.svg';
import Profile from './Profile';

interface CommentProps {
  user: string;
  org: string;
  location: string;
  comment: string;
  likes: number;
}

export default function Comment({
  user,
  org,
  location,
  comment,
  likes,
}: CommentProps) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Profile user={user} org={org} location={location} />
      <View style={styles.row}>
        <View style={styles.content}>
          <Text style={styles.text}>{comment}</Text>
        </View>
        <View>
          <HeartIcon width={20} height={20} />
        </View>
      </View>
      <Text style={styles['lc-text']}>{likes} Likes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    flex: 1,
  },
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
  },
  'lc-text': {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    marginRight: 10,
  },
});

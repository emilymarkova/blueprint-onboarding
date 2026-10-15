import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import CommentsIcon from '../../assets/comments-icon.svg';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import Profile from './Profile';

interface PostProps {
  username: string;
  npo: string;
  city: string;
  state: string;
  text: string;
  image: string;
  likeCount: number;
}

export default function Post({
  username,
  npo,
  city,
  state,
  text,
  image,
  likeCount,
}: PostProps) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Profile user={username} org={npo} location={`${city}, ${state}`} />
      <Image
        alt={`${city}, ${state}`}
        style={styles.image}
        source={image}
        contentFit="cover"
      />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.metaRow}>
        <Text style={styles['lc-text']}>{likeCount} Likes</Text>
        <Text style={styles['lc-text']}>View 2 Comments</Text>
      </View>
      <View style={styles.actionRow}>
        <View style={styles.actionGroup}>
          <View style={styles.iconWrap}>
            <HeartIcon width={24} height={24} />
          </View>
          <CommentsIcon width={24} height={24} />
        </View>
        <ShareIcon width={24} height={24} />
      </View>
      <Text style={styles.date}>February 1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  image: {
    width: '100%',
    aspectRatio: 1.5,
    borderRadius: 15,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
  },
  metaRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  'lc-text': {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    marginRight: 10,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  actionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    marginRight: 10,
  },
  date: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 11,
    color: 'gray',
    marginTop: 6,
  },
});

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import CommentsIcon from '../../assets/comments-icon.svg';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import Comment from '../components/Comment';
import Profile from '../components/Profile';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <Profile
            user="neha32"
            org="Mission Bit"
            location="San Francisco, CA"
          />
          <Image
            alt="San Francisco Street"
            style={{
              width: '100%',
              aspectRatio: 1.5,
              borderRadius: 15,
              marginBottom: 10,
            }}
            source="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
            contentFit="cover"
          />
          <Text style={styles.text}>
            This past weekend, I taught at Mission Bit. I was working with a
            group of high school students who were building their first web
            pages. I really enjoyed being able to help guide 10 students on
            learning CS fundamentals through a project! They were all really
            eager to learn, and I'm glad I signed up. Highly recommend to any
            other software engineers interested in volunteering! Sign-up here:
            https://missionbit.org/get-involved/volunteer-with-us/
          </Text>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={styles['lc-text']}>3 Likes</Text>
            <Text style={styles['lc-text']}>View 2 Comments</Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View style={{ marginRight: 10 }}>
                <HeartIcon width={24} height={24} />
              </View>
              <CommentsIcon width={24} height={24} />
            </View>
            <ShareIcon width={24} height={24} />
          </View>
          <Text
            style={{
              fontFamily: 'Poppins_400Regular',
              fontSize: 11,
              color: 'gray',
              margin: 5,
            }}
          >
            February 1
          </Text>
        </ScrollView>
      </View>
      <View style={styles.comments}>
        <Comment
          user="aiden_ugh"
          org="Boys and Girls Club"
          location="Oakland, CA"
          comment="I recently volunteered at my local Boys and Girls Club!"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    fontSize: 14,
  },
  content: {
    width: '100%',
    height: '75%',
    backgroundColor: '#ffffff',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4%',
  },
  comments: {
    width: '100%',
    height: '25%',
    backgroundColor: '#ffffff',
    position: 'relative',
    borderWidth: 0.5,
    borderColor: 'gray',
    padding: '4%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
  },
  'lc-text': {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    marginRight: 10,
  },
});

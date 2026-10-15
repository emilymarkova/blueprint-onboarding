import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import supabase from '../../api/supabase/client';
import { fetchAllRows } from '../../api/supabase/queries/query';
import Comment from '../components/Comment';
import Post from '../components/Post';

type CommentType = {
  username: string;
  numlikes: number;
  text: string;
};

type PostType = {
  username: string;
  npo: string;
  city: string;
  state: string;
  text: string;
  image: string;
  likeCount: number;
  comments: CommentType[];
};

export default function App() {
  const [postData, setPostData] = useState<PostType[]>([]);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  async function fetchPostData(): Promise<PostType[]> {
    const allPostData = await fetchAllRows();
    const posts: PostType[] = [];

    for (const data of allPostData) {
      const { data: cityRow } = await supabase
        .from('Locations')
        .select('city_name')
        .eq('id', data.location_id)
        .single();
      const { data: stateRow } = await supabase
        .from('Locations')
        .select('state_abbr')
        .eq('id', data.location_id)
        .single();
      const { data: commentRow } = await supabase
        .from('Comments')
        .select('*')
        .eq('post_id', data.id);

      const comments: CommentType[] = (commentRow || []).map(comment => ({
        username: comment.user_name,
        numlikes: comment.num_likes,
        text: comment.comment_text,
      }));

      posts.push({
        username: data.user_name ?? '',
        npo: data.npo_name ?? '',
        city: cityRow?.city_name ?? '',
        state: stateRow?.state_abbr ?? '',
        text: data.post_text ?? '',
        image: data.image_link ?? '',
        likeCount: data.num_likes ?? 0,
        comments,
      });
    }

    return posts;
  }

  useEffect(() => {
    async function load() {
      const fetchedPosts = await fetchPostData();
      setPostData(fetchedPosts);
    }

    void load();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.feed}>
        {postData.map((post, index) => (
          <View
            key={`${post.username}-${post.npo}-${index}`}
            style={styles.postGroup}
          >
            <Post
              username={post.username}
              npo={post.npo}
              city={post.city}
              state={post.state}
              text={post.text}
              image={post.image}
              likeCount={post.likeCount}
            />
            <View style={styles.comments}>
              {post.comments.map((comment, commentIndex) => (
                <Comment
                  key={`${comment.username}-${commentIndex}`}
                  user={comment.username}
                  org=""
                  location=""
                  likes={comment.numlikes}
                  comment={comment.text}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  feed: {
    width: '100%',
  },
  postGroup: {
    width: '100%',
  },
  comments: {
    width: '100%',
    paddingHorizontal: '4%',
    paddingBottom: 16,
    backgroundColor: '#ffffff',
  },
});

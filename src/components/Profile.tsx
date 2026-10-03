import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';

interface ProfileProps {
  user: string;
  org: string;
  location: string;
}

export default function Profile({ user, org, location }: ProfileProps) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const B = ({ children }: { children: React.ReactNode }) => (
    <Text style={{ fontFamily: 'Poppins_700Bold' }}>{children}</Text>
  );

  return (
    <View style={styles['profile-header']}>
      <View style={{ aspectRatio: 1, width: '10%', marginRight: 10 }}>
        <ProfilePlaceholder width={40} height={40} />
      </View>
      <View style={{ display: 'flex' }}>
        <Text style={styles['text']}>
          <B>{user}</B> at <B>{org}</B>
        </Text>
        <Text
          style={{
            color: 'grey',
            fontFamily: 'Poppins_400Regular',
            fontSize: 11,
          }}
        >
          {location}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  'profile-header': {
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 50,
  },
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
  },
});

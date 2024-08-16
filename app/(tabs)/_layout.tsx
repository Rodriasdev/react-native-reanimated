import React from 'react';
import {Stack} from 'expo-router'
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
      <Stack initialRouteName='index'>
        <Stack.Screen name='index' options={{headerShown: false}}/>
      </Stack>
  );
}

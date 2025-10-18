import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          marginTop: 4,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/images/home.png')}
              style={{ width: 24, height: 24, opacity: focused ? 0.75 : 0.5, marginTop: 5 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: 'Chats',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/images/chaticon.png')}
              style={{ width: 24, height: 24, opacity: focused ? 0.75 : 0.5, marginTop: 5 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/images/settings.png')}
              style={{ width: 24, height: 24, opacity: focused ? 0.75 : 0.5, marginTop: 5 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}

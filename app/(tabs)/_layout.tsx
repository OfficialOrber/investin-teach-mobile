// This file builds the bar of buttons along the bottom of the screen.
// Each <Tabs.Screen /> below points at one file in this same folder:
//   name="index" -> index.tsx,  name="list" -> list.tsx,  name="about" -> about.tsx
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router/js-tabs';
import { useTheme } from '@/theme';

export default function TabsLayout() {
  // Grab the colours so the tab bar matches the rest of the app.
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false, // every screen writes its own title, so no header needed
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: { backgroundColor: colors.background, borderTopColor: colors.border },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'List',
          tabBarIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

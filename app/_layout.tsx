// This file wraps around EVERY screen in the app.
// It is the first thing that runs, so it is where we set up the colours.
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from '@/theme';

// This bit has to be its own little component, because useTheme() only works
// INSIDE ThemeProvider (look at the bottom of this file to see it being wrapped).
function AppStack() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      {/* The bottom tab bar. Each tab draws its own title, so hide this header. */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* This one slides in on top of the tabs and gets a back button for free. */}
      <Stack.Screen name="item/[id]" options={{ title: 'Item' }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      {/* Makes the phone's clock and battery icons readable in light AND dark mode. */}
      <StatusBar style="auto" />
      <AppStack />
    </ThemeProvider>
  );
}

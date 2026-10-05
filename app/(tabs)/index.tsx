// HOME SCREEN — this teaches "state".
// State is a value that can change while the app is running, like a score.
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Screen, Text } from '@/components/ui';
import { app } from '@/config/app';

export default function HomeScreen() {
  // `count` is the number we show on screen. It starts at 0.
  // `setCount` is the ONLY way to change it. Every time you call setCount,
  // React redraws this screen with the new number.
  const [count, setCount] = useState(0);

  return (
    <Screen>
      {/* These two lines come from src/config/app.ts — go and change them! */}
      <Text variant="heading">
        {app.emoji} {app.name}
      </Text>
      <Text variant="muted">{app.tagline}</Text>

      <Card style={styles.card}>
        <Text variant="title">You tapped {count} times</Text>

        <View style={styles.row}>
          <Button
            title="−"
            variant="secondary"
            onPress={() => setCount(count - app.counterStep)}
          />
          <Button title="+" onPress={() => setCount(count + app.counterStep)} />
        </View>

        <Button title="Reset" variant="ghost" onPress={() => setCount(0)} />
      </Card>

      {/* 👇 Change the words on the next line, press save, and watch your phone. */}
      <Text variant="muted">Edit this screen in app/(tabs)/index.tsx — your app starts here.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { marginVertical: 24, gap: 16 },
  row: { flexDirection: 'row', gap: 8 },
});

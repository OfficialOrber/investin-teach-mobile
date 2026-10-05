// ABOUT SCREEN — this teaches reading values out of a different file.
// Nothing on this screen is typed in here. It all comes from src/config/app.ts.
import { StyleSheet } from 'react-native';
import { Card, Screen, Text } from '@/components/ui';
import { app } from '@/config/app';

// A plain list of words. Add a line here and it appears on the screen.
const builtWith = [
  'Expo Go — runs this app on your phone with no installing',
  'Expo Router — every file in the app folder is a screen',
  'React Native — the Text, View and FlatList pieces you build with',
  'TypeScript — warns you when you make a typo',
  'AsyncStorage — remembers your list after you close the app',
];

export default function AboutScreen() {
  return (
    <Screen>
      <Text variant="heading">
        {app.emoji} {app.name}
      </Text>
      <Text variant="muted">{app.tagline}</Text>

      <Card style={styles.card}>
        <Text variant="muted">Made by</Text>
        <Text variant="title">{app.author}</Text>
      </Card>

      <Text variant="title">How this app is built</Text>
      {/* .map() takes each line in the list above and makes a Text out of it. */}
      {builtWith.map((line) => (
        <Text key={line} variant="muted" style={styles.line}>
          • {line}
        </Text>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { marginVertical: 24 },
  line: { marginTop: 8 },
});

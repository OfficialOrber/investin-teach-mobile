// ITEM SCREEN — this teaches moving from one screen to another.
// The square brackets in the filename [id].tsx mean "this part of the address changes".
// So /item/123 and /item/456 both open this one file.
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Button, Card, Screen, Text } from '@/components/ui';

export default function ItemScreen() {
  // The List screen sent us an id and some text. This is how we read them back out.
  const { id, text } = useLocalSearchParams<{ id: string; text: string }>();
  const router = useRouter(); // lets us send the person back to where they came from

  return (
    // No 'top' edge here, because the back-button header is already up there.
    <Screen edges={['bottom']}>
      <Text variant="heading">{text}</Text>

      <Card style={styles.card}>
        <Text variant="muted">This item&apos;s id is</Text>
        <Text variant="title">{id}</Text>
      </Card>

      <Text variant="muted" style={styles.hint}>
        That id came from the List screen. Open app/item/[id].tsx to see how it arrived.
      </Text>

      <Button title="Go back" variant="secondary" onPress={() => router.back()} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { marginVertical: 24 },
  hint: { marginBottom: 24 },
});

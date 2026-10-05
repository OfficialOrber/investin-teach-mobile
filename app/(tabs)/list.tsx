// LIST SCREEN — this teaches lists, typing boxes, and saving data on the phone.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Card, Input, Screen, Text } from '@/components/ui';
import { app } from '@/config/app';

// One thing in the list. Each one needs its own id so React can tell them apart.
type Item = { id: string; text: string };

// The name the list is saved under on the phone. Any name works.
const STORAGE_KEY = 'my-list';

export default function ListScreen() {
  const [text, setText] = useState(''); // whatever is in the typing box right now
  const [items, setItems] = useState<Item[]>([]); // the whole list
  const [loaded, setLoaded] = useState(false); // have we read the phone yet?

  // LOAD — runs once, when the screen first opens.
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((saved) => {
      if (saved) setItems(JSON.parse(saved)); // turn the saved text back into a list
      setLoaded(true);
    });
  }, []);

  // SAVE — runs every time the list changes.
  useEffect(() => {
    if (!loaded) return; // wait for LOAD to finish, or we would save an empty list over it
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, loaded]);

  function addItem() {
    if (text.trim() === '') return; // ignore empty taps on Add
    setItems([...items, { id: Date.now().toString(), text: text.trim() }]);
    setText(''); // empty the box, ready for the next one
  }

  function deleteItem(id: string) {
    setItems(items.filter((item) => item.id !== id)); // keep everything EXCEPT this id
  }

  return (
    <Screen>
      <Text variant="heading">{app.listTitle}</Text>

      <View style={styles.form}>
        <Input
          value={text}
          onChangeText={setText}
          placeholder={app.listPlaceholder}
          onSubmitEditing={addItem}
          style={styles.input}
        />
        <Button title="Add" onPress={addItem} />
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text variant="muted">Nothing here yet. Add something above!</Text>}
        renderItem={({ item }) => (
          <Card style={styles.row}>
            {/* Tapping the words opens app/item/[id].tsx */}
            <Link href={{ pathname: '/item/[id]', params: { id: item.id, text: item.text } }}>
              <Text>{item.text}</Text>
            </Link>
            <Button title="Delete" variant="ghost" onPress={() => deleteItem(item.id)} />
          </Card>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  form: { flexDirection: 'row', gap: 8, marginVertical: 16 },
  input: { flex: 1 },
  list: { gap: 8 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
});

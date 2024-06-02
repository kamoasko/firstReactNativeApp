import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

const AdminPanel = () => {
  const [content, setContent] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    setContent([...content, { key: Math.random().toString(), text: newItem }]);
    setNewItem("");
  };

  const deleteItem = (key) => {
    setContent(content.filter((item) => item.key !== key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Panel</Text>
      <TextInput
        style={styles.input}
        placeholder="New Item"
        value={newItem}
        onChangeText={setNewItem}
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={content}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.text}</Text>
            <Button title="Delete" onPress={() => deleteItem(item.key)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
});

export default AdminPanel;

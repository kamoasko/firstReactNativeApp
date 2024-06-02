import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const categories = ["Ev", "Araba", "İkinci El Eşya", "Teknoloji", "Moda"];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          onPress={() => navigation.navigate("Category", { category })}
          style={styles.card}
        >
          <View>
            <Text style={styles.title}>{category}</Text>
            <Text
              style={styles.description}
            >{`${category} kategorisiyle ilgili içerikler burada yer alacak.`}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
});

export default HomeScreen;

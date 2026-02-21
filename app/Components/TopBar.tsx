import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TopBar() {
  const [activeCategory, setActiveCategory] = useState("Music");

  const categories = ["All", "Music", "Podcasts", "Audiobooks"];

  return (
    <View style={styles.container}>
      {/* Categories tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContent}
      >
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle" size={32} color="#fff" />
        </TouchableOpacity>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryTab,
              activeCategory === category && styles.activeCategoryTab,
            ]}
            onPress={() => setActiveCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                activeCategory === category && styles.activeCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#282828",
    marginTop: 50,
  },

  profileButton: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#282828",
    justifyContent: "center",
    alignItems: "center",
  },

  categoriesContent: {
    paddingHorizontal: 10,
    gap: 11,
  },
  categoryTab: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#282828",
  },
  activeCategoryTab: {
    backgroundColor: "#3bdf53",
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  activeCategoryText: {
    color: "#000000",
    fontWeight: "600",
  },
});

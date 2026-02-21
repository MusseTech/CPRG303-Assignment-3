import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const Header = () => {
  const router = useRouter();

  const handleLibraryPress = () => {
    router.push("/library");
  };

  return (
    <View style={styles.container}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <TouchableOpacity>
          <Ionicons name="basketball-outline" size={47} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLibraryPress}>
          <Text style={styles.title}>Your Library</Text>
        </TouchableOpacity>

        <View style={styles.icons}>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={26} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="add" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={styles.settingtab}>
          <Ionicons name="options-outline" size={22} color="white" />
        </Text>
        <Text style={styles.tabText}>Playlists</Text>
        <Text style={styles.tabText}>Podcasts</Text>
        <Text style={styles.tabText}>Albums</Text>
        <Text style={styles.tabText}>Artists</Text>
        <Text style={styles.tabText}>Events</Text>
      </View>
    </View>
  );
};

export default Header;

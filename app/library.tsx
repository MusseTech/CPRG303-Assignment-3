import { View } from "react-native";
import BottomNavBar from "./Components/BottomNavBar";
import Header from "./Components/Header/header";
import Playlist from "./Components/Playlist/playlist";

export default function Library() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: "#121212",
        }}
      >
        <Playlist />
      </View>
      <BottomNavBar />
    </View>
  );
}

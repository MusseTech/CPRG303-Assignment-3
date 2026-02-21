import { ScrollView, View } from "react-native";
import Header from "./Components/Header/header";
import BottomNavBar from "./Components/Navbars/BottomNavBar";
import Playlist from "./Components/Playlist/playlist";

export default function Library() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: "#121212",
          }}
        >
          <Playlist />
        </View>
      </ScrollView>
      <BottomNavBar />
    </View>
  );
}

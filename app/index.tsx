import { View } from "react-native";
import Header from "./Components/Header/header";
import Playlist from "./Components/Playlist/playlist";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Playlist />
    </View>
  );
}

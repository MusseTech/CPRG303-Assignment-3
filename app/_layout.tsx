import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import BottomNavBar from "./Components/Navbars/BottomNavBar";
import NowPlayingBar from "./Components/NowplayingBar";

export default function RootLayout() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSong, setCurrentSong] = useState({
    title: "Move",
    artist: "Adam Port, Keinemusik, Orso",
    imageUrl: "https://i.ebayimg.com/images/g/iLQAAOSwkEtnSO7A/s-l1600.webp",
  });

  const handleNowPlayingPress = () => {
    // Navigate to song screen
    router.push("/song");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#000" },
        }}
      />

      {/* Now Playing Bar - appears above bottom nav */}
      <NowPlayingBar
        onPress={handleNowPlayingPress}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        isPlaying={isPlaying}
        songTitle={currentSong.title}
        artistName={currentSong.artist}
        imageUrl={currentSong.imageUrl}
      />

      {/* Bottom Navigation */}
      <BottomNavBar />
    </View>
  );
}

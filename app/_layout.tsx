import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import BottomNavBar from "./Components/Navbars/BottomNavBar";
import NowPlayingBar from "./Components/NowplayingBar";

export default function RootLayout() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSong, setCurrentSong] = useState({
    title: "Opalite",
    artist: "Taylor Swift",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d7812467811a7da6e6a44902", // Replace with actual image URL
  });

  const handleNowPlayingPress = () => {
    // Navigate to song screen
    router.push("/");
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

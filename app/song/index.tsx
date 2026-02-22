import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AlertButton from "../components/AlertButton";

export default function PlayerScreen() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />

      {/* Top bar*/}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Text style={styles.chevron}>⌄</Text>
        </TouchableOpacity>
        <Text style={styles.playlistTitle}>Adam Port</Text>
        <TouchableOpacity>
          <Text style={styles.dots}>•••</Text>
        </TouchableOpacity>
      </View>

      {/* Album Art */}
      <View style={styles.albumArt}>
        <Image
          source={{
            uri: "https://i.ebayimg.com/images/g/iLQAAOSwkEtnSO7A/s-l1600.webp",
          }}
          style={styles.albumImage}
        />
      </View>

      {/* Song Info */}
      <View style={styles.songInfo}>
        <View style={styles.songInfoLeft}>
          <Text style={styles.songTitle}>Move</Text>
          <Text style={styles.songArtists} numberOfLines={1}>
            Adam Port, Stryv, Keinemusik, Orso, Malachii
          </Text>
        </View>
        <View style={styles.savedCircle}>
          <Text style={styles.savedCheckMark}>✓</Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBarBg}>
          <View style={styles.progressBarFill} />
        </View>
        <View style={styles.timeRow}>
          <Text style={styles.timeText}>0:01</Text>
          <Text style={styles.timeText}>-2:55</Text>
        </View>
      </View>

      {/* Conntrols */}
      <View style={styles.controls}>
        <TouchableOpacity>
          <Text style={styles.controlIconGreen}>⇄</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.controlIcon}>⏮</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playPauseBtn}
          onPress={() => setIsPlaying(!isPlaying)}
        >
          <Text style={styles.playPauseIcon}>{isPlaying ? "⏸" : "▶"}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.controlIcon}>⏭</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.controlIcon}>⏱</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom icons */}
      <View style={styles.bottomIcons}>
        <TouchableOpacity>
          <Text style={styles.bottomIcon}>📺</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity>
          <Text style={styles.bottomIcon}>⬆</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.bottomIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Lyrics preview bar */}
      <TouchableOpacity style={styles.lyricsBar}>
        <Text style={styles.lyricsText}>Lyrics preview</Text>
      </TouchableOpacity>

      <AlertButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#8B2000" },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  chevron: { color: "#fff", fontSize: 24 },
  playlistTitle: { color: "#fff", fontSize: 13, fontWeight: "600" },
  dots: { color: "#fff", fontSize: 16, letterSpacing: 1 },

  albumArt: {
    marginHorizontal: 24,
    height: 300,
    backgroundColor: "#c13a00",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  albumImage: { width: "100%", height: "100%" },

  songInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  songInfoLeft: { flex: 1 },
  songTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 4,
  },
  songArtists: { color: "#ccc", fontSize: 13 },

  savedCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  savedCheckMark: { color: "#000", fontSize: 20, fontWeight: "700" },

  progressContainer: { paddingHorizontal: 24, marginBottom: 16 },
  progressBarBg: {
    height: 3,
    backgroundColor: "#ffffff44",
    borderRadius: 2,
    marginBottom: 6,
  },
  progressBarFill: {
    width: "2%",
    height: 3,
    backgroundColor: "#fff",
    borderRadius: 2,
  },
  timeRow: { flexDirection: "row", justifyContent: "space-between" },
  timeText: { color: "#ccc", fontSize: 12 },

  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  controlIcon: { color: "#fff", fontSize: 26 },
  controlIconGreen: { color: "#1DB954", fontSize: 26 },
  playPauseBtn: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  playPauseIcon: { fontSize: 28 },

  bottomIcons: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginBottom: 16,
    alignItems: "center",
  },
  spacer: { flex: 1 },
  bottomIcon: { color: "#fff", fontSize: 22, marginLeft: 20 },

  lyricsBar: {
    marginHorizontal: 16,
    backgroundColor: "#c13a00",
    borderRadius: 12,
    padding: 16,
  },
  lyricsText: { color: "#fff", fontWeight: "700", fontSize: 15 },
});

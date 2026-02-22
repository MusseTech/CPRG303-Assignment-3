import React, { useState } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../Styles/songs.style";

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
    </SafeAreaView>
  );
}

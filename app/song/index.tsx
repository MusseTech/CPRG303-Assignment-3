import { Ionicons } from "@expo/vector-icons";
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
          <Ionicons name="shuffle" size={26} color="#1DB954" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-skip-back" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playPauseBtn}
          onPress={() => setIsPlaying(!isPlaying)}
        >
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={36}
            color="#000"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-skip-forward" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="timer-outline" size={26} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Bottom icons */}
      <View style={styles.bottomIcons}>
        <TouchableOpacity>
          <Ionicons name="tv-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity>
          <Ionicons name="share-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="list-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Lyrics preview bar */}
      <TouchableOpacity style={styles.lyricsBar}>
        <Text style={styles.lyricsText}>Lyrics preview</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AlertButton from "../components/AlertButton";

const ARTIST = {
  name: "KAYTRANADA",
  monthlyListeners: "8.5M monthly listeners",
  heroImage:
    "https://www.nme.com/wp-content/uploads/2025/08/KAYTRANADA_LiamMacRae-1392x884.jpg",
  miniThumbImage:
    "https://i.discogs.com/zpHdKtFCXWDykV1GQT6eV4n9qCs0ZXDSACfDKyCetuo/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MTE1/Njg1LTE2NTk3NjQw/OTItNDA3NS5qcGVn.jpeg",
  nowPlayingImage:
    "https://i.ebayimg.com/images/g/K2AAAeSwfI1pHci7/s-l960.webp",
  popularTracks: [
    {
      id: "1",
      title: "Intimidated (feat. H.E.R.)",
      streams: "232,652,704",
      saved: true,
      imageUrl:
        "https://i.discogs.com/zpHdKtFCXWDykV1GQT6eV4n9qCs0ZXDSACfDKyCetuo/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MTE1/Njg1LTE2NTk3NjQw/OTItNDA3NS5qcGVn.jpeg",
    },
    {
      id: "2",
      title: "... What You Need (feat. Charlotte D...",
      streams: "91,614,748",
      saved: false,
      imageUrl: "https://i.ebayimg.com/images/g/K2AAAeSwfI1pHci7/s-l960.webp",
    },
    {
      id: "3",
      title: "YOU'RE THE ONE (feat. Syd)",
      streams: "247,041,526",
      saved: true,
      imageUrl: "https://i.ebayimg.com/images/g/vrEAAOSwNfJksb0o/s-l1600.webp",
    },
  ],
};

export default function ArtistScreen() {
  const [following, setFollowing] = useState(true);
  const [activeTab, setActiveTab] = useState("Music");

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />

      {/* Back button */}
      <TouchableOpacity style={styles.backBtn}>
        <Text style={styles.backArrow}>‹</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={styles.hero}>
          <Image source={{ uri: ARTIST.heroImage }} style={styles.heroImage} />
          <View style={styles.heroOverlay} />
          <Text style={styles.artistName}>{ARTIST.name}</Text>
        </View>

        {/* Listeners */}
        <View style={styles.listenersRow}>
          <Text style={styles.listenersText}>{ARTIST.monthlyListeners}</Text>
        </View>

        {/* Action Row */}
        <View style={styles.actionRow}>
          <Image
            source={{ uri: ARTIST.miniThumbImage }}
            style={styles.miniThumb}
          />
          <TouchableOpacity
            style={[styles.followBtn, following && styles.followingBtn]}
            onPress={() => setFollowing(!following)}
          >
            <Text
              style={[styles.followText, following && styles.followingText]}
            >
              {following ? "Following" : "Follow"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.dots}>•••</Text>
          </TouchableOpacity>
          <View style={styles.spacer} />
          <TouchableOpacity style={styles.shuffleBtn}>
            <Text style={styles.shuffleIcon}>⇄</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playBtn}>
            <Text style={styles.playIcon}>▶</Text>
          </TouchableOpacity>
        </View>

        {/* Music / Clips / Merch tabs */}
        <View style={styles.tabRow}>
          {["Music", "Clips", "Merch"].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
              <Text
                style={[
                  styles.tabLabel,
                  activeTab === tab && styles.activeTabLabel,
                ]}
              >
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.activeTabLine} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Popular Tracks */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular</Text>
          {ARTIST.popularTracks.map((track, i) => (
            <View key={track.id} style={styles.trackRow}>
              <Text style={styles.trackNum}>{i + 1}</Text>
              <Image
                source={{ uri: track.imageUrl }}
                style={styles.trackThumb}
              />
              <View style={styles.trackInfo}>
                <Text style={styles.trackTitle} numberOfLines={1}>
                  {track.title}
                </Text>
                <Text style={styles.trackStreams}>{track.streams}</Text>
              </View>
              {track.saved && (
                <View style={styles.savedBadge}>
                  <Text style={styles.savedCheck}>✓</Text>
                </View>
              )}
              <TouchableOpacity>
                <Text style={styles.dots}>•••</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Now Playing Bar */}
        <View style={styles.nowPlayingBar}>
          <Image
            source={{ uri: ARTIST.nowPlayingImage }}
            style={styles.npThumb}
          />
          <View style={styles.npInfo}>
            <Text style={styles.npTitle} numberOfLines={1}>
              What You Need (feat. Charlotte Day Wilson)
            </Text>
          </View>
          <Text style={styles.npPlayIcon}>▶</Text>
        </View>

        <AlertButton />
        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#121212" },

  backBtn: {
    position: "absolute",
    top: 50,
    left: 16,
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: { color: "#fff", fontSize: 24, fontWeight: "300" },
  hero: { width: "100%", height: 300, justifyContent: "flex-end" },
  heroImage: { width: "100%", height: "100%", position: "absolute" },
  heroOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  artistName: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "900",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  listenersRow: { paddingHorizontal: 16, paddingTop: 12 },
  listenersText: { color: "#b3b3b3", fontSize: 13 },

  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  miniThumb: { width: 44, height: 44, borderRadius: 4 },
  followBtn: {
    borderWidth: 1,
    borderColor: "#b3b3b3",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  followingBtn: { borderColor: "#fff" },
  followText: { color: "#b3b3b3", fontSize: 13, fontWeight: "600" },
  followingText: { color: "#fff" },
  dots: { color: "#b3b3b3", fontSize: 12, letterSpacing: 1 },
  spacer: { flex: 1 },
  shuffleBtn: { padding: 8 },
  shuffleIcon: { color: "#b3b3b3", fontSize: 22 },

  playBtn: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#1DB954",
    alignItems: "center",
    justifyContent: "center",
  },
  playIcon: { color: "#000", fontSize: 22, marginLeft: 3 },

  tabRow: {
    flexDirection: "row",
    gap: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  tabLabel: {
    color: "#b3b3b3",
    fontSize: 15,
    fontWeight: "600",
    paddingBottom: 8,
  },
  activeTabLabel: { color: "#fff" },
  activeTabLine: {
    height: 2,
    backgroundColor: "#1DB954",
    borderRadius: 1,
    marginTop: 2,
  },

  section: { paddingHorizontal: 16, paddingTop: 16 },
  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
  },

  trackRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 12,
  },
  trackNum: { color: "#b3b3b3", fontSize: 14, width: 16, textAlign: "center" },
  trackThumb: { width: 48, height: 48, borderRadius: 4 },
  trackInfo: { flex: 1 },
  trackTitle: { color: "#fff", fontSize: 15, marginBottom: 4 },
  trackStreams: { color: "#b3b3b3", fontSize: 13 },
  savedBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#1DB954",
    alignItems: "center",
    justifyContent: "center",
  },
  savedCheck: { color: "#000", fontSize: 11, fontWeight: "700" },

  nowPlayingBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a3a3a",
    marginHorizontal: 8,
    marginTop: 16,
    borderRadius: 8,
    padding: 10,
    gap: 10,
  },
  npThumb: { width: 40, height: 40, borderRadius: 4 },
  npInfo: { flex: 1 },
  npTitle: { color: "#fff", fontSize: 13 },
  npHeadphones: { fontSize: 22 },
  npPlayIcon: { color: "#fff", fontSize: 20 },
});

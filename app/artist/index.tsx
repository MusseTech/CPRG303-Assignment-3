import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { artistStyles as styles } from "../Styles/artist.style";

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
      </ScrollView>
    </SafeAreaView>
  );
}

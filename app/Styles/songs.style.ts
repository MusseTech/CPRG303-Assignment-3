import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
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
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#1DB954",
    alignItems: "center",
    justifyContent: "center",
  },
  savedCheckMark: { color: "#fff", fontSize: 20, fontWeight: "700" },

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

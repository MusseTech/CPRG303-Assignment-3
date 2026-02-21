import { StyleSheet } from "react-native";

export const nowPlayingStyles = StyleSheet.create({
  container: {
    backgroundColor: "#181818",
    borderTopWidth: 1,
    borderTopColor: "#282828",
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: "absolute",
    bottom: 60, // Height of bottom nav bar (adjust based on your bottom nav height)
    left: 0,
    right: 0,
    zIndex: 100,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  imageContainer: {
    width: 48,
    height: 48,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#333",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  placeholderImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#444",
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 2,
  },
  artistName: {
    color: "#b3b3b3",
    fontSize: 13,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  controlButton: {
    padding: 4,
  },
});

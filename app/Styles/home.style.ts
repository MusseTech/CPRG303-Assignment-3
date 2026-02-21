import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  content: {
    flex: 1,
    padding: 16,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 8,
  },
  artistSection: {
    marginBottom: 24,
  },
  artistName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  albumRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  albumCard: {
    width: "40%",
    height: 200,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  albumImage: {
    width: "100%",
    height: 150,
    backgroundColor: "#333",
    borderRadius: 4,
    marginBottom: 12,
  },
  albumTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  artistText: {
    color: "#b3b3b3",
    fontSize: 12,
  },
});

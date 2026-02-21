import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  // Header styles (similar to Playlist)
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  locationContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#282828",
    justifyContent: "center",
    alignItems: "center",
  },

  // List Container
  listContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
    gap: 12,
  },
  row: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
  },

  // List Item styles (matching your Playlist pattern)
  listItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#181818",
    borderRadius: 8,
    padding: 8,
  },
  listItemImage: {
    width: 60,
    height: 60,
    backgroundColor: "#333",
    borderRadius: 4, // Square corners for albums/playlists
    marginRight: 12,
    overflow: "hidden",
  },
  listItemImageRounded: {
    width: 60,
    height: 60,
    backgroundColor: "#333",
    borderRadius: 30, // Circle for artists
    marginRight: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageRounded: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  listItemTextContainer: {
    flex: 1,
  },
  listItemTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  listItemSubtitle: {
    color: "#b3b3b3",
    fontSize: 14,
  },

  // Search Bar
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  searchBar: {
    backgroundColor: "#282828",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  searchText: {
    color: "#b3b3b3",
    fontSize: 16,
  },

  // Section Styles
  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 8,
    paddingHorizontal: 16,
  },
  artistSection: {
    marginBottom: 24,
  },

  // Album Card Styles
  albumCard: {
    width: 150,
    marginLeft: 16,
  },
  albumImage: {
    width: "100%",
    height: 150,
    backgroundColor: "#333",
    borderRadius: 4,
    marginBottom: 12,
    overflow: "hidden",
  },
  albumImageStyle: {
    width: "100%",
    height: "100%",
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

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
  categoriesContainer: {
    marginTop: 8,
    marginBottom: 16,
  },
  categoriesContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#282828",
    marginRight: 8,
  },
  activeCategoryChip: {
    backgroundColor: "#fff",
  },
  categoryChipText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  activeCategoryChipText: {
    color: "#000",
    fontWeight: "600",
  },
  // List Container (Horizontal items)
  listContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
    gap: 12, // Gap between rows
  },
  row: {
    flexDirection: "row",
    gap: 12, // Gap between items in the same row
    justifyContent: "space-between",
  },
  listItem: {
    flex: 1, // This makes each item take equal width
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#181818",
    borderRadius: 8,
    padding: 8,
  },
  listItemImage: {
    width: 40,
    height: 40,
    backgroundColor: "#333",
    borderRadius: 4,
    marginRight: 12,
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
  searchIcon: {
    color: "#b3b3b3",
    fontSize: 16,
  },
  searchText: {
    color: "#b3b3b3",
    fontSize: 16,
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

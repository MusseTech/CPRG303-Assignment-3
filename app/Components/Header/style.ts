import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    paddingTop: 70,
    borderBottomWidth: 0,
    borderBottomColor: "transparent",
    paddingBottom: 12,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    color: "white",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginRight: 160,
    color: "white",
  },

  icons: {
    flexDirection: "row",
    gap: 14,
  },

  tabs: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 12,
  },

  tabText: {
    color: "white",
    fontWeight: "600",
    backgroundColor: "#333333",
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginHorizontal: 8,
  },

  settingtab: {
    color: "white",
    fontWeight: "600",
    backgroundColor: "#333333",
    borderRadius: 22,
    paddingHorizontal: 9,
    paddingVertical: 8,
    marginHorizontal: 2,
  },

  showContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#121212",
  },

  showText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});

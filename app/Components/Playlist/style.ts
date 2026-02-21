import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 20,
    backgroundColor: "#121212",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },

  headerTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  locationpin: {
    marginRight: 6,
  },

  location: {
    color: "#bdbdbd",
    fontSize: 13,
    fontWeight: "600",
  },

  itemsContainer: {
    marginTop: 12,
    paddingHorizontal: 4,
  },

  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  itemBox: {
    width: 70,
    height: 70,
    backgroundColor: "#333333",
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  itemBoxRounded: {
    width: 70,
    height: 70,
    backgroundColor: "#333333",
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    overflow: "hidden",
  },

  itemInfo: {
    flex: 1,
  },

  itemPrice: {
    color: "#fff",
    fontWeight: "800",
    marginBottom: 4,
  },

  itemLabel: {
    color: "#ddd",
    fontWeight: "700",
  },

  imageStyle: {
    width: "100%",
    height: "100%",
  },

  imageStyleRounded: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
  },
});

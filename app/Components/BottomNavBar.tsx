import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type NavItem = {
  name: string;
  path: string;
  icon: keyof typeof Ionicons.glyphMap;
  activeIcon: keyof typeof Ionicons.glyphMap;
};

export default function BottomNavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      name: "Home",
      path: "/",
      icon: "home-outline",
      activeIcon: "home",
    },
    {
      name: "Search",
      path: "/search",
      icon: "search-outline",
      activeIcon: "search",
    },
    {
      name: "Your Library",
      path: "/library",
      icon: "library-outline",
      activeIcon: "library",
    },
    {
      name: "Create",
      path: "/create",
      icon: "add-circle-outline",
      activeIcon: "add-circle",
    },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <View style={styles.container}>
      {navItems.map((item) => {
        const active = isActive(item.path);
        return (
          <TouchableOpacity
            key={item.name}
            style={styles.tabItem}
            onPress={() => router.push(item.path as any)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={active ? item.activeIcon : item.icon}
              size={24}
              color={active ? "#fff" : "#b3b3b3"}
            />
            <Text style={[styles.tabLabel, active && styles.activeTabLabel]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#000",
    borderTopWidth: 0.5,
    borderTopColor: "#282828",
    paddingBottom: 8,
    paddingTop: 4,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  tabLabel: {
    color: "#b3b3b3",
    fontSize: 10,
    marginTop: 4,
  },
  activeTabLabel: {
    color: "#fff",
  },
});

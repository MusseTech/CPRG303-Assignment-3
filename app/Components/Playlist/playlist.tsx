import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./style";

const items = [
  {
    id: "1",
    title: "Ants From Up There",
    author: "Album • Black Country, New Road",
    Image: "https://i.ebayimg.com/images/g/RToAAOSwbk5jOfHr/s-l960.webp",
  },
  {
    id: "2",
    title: "Getting Killed",
    author: "Album • Geese",
    Image: "https://i.ebayimg.com/images/g/ru4AAeSwi7FpDjnD/s-l1600.webp",
  },
  {
    id: "3",
    title: "On Repeat",
    author: "Playlist • Spotify",
    Image:
      "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/repeat/or/en",
  },
  {
    id: "4",
    title: "Apricot Princess",
    author: "Album • Rex Orange County",
    Image: "https://i.ebayimg.com/images/g/I4wAAOSwi~Vm1tGL/s-l400.jpg",
  },
  {
    id: "5",
    title: "Winter Mornings!!",
    author: "Playlist • EventVault",
    Image:
      "https://i.pinimg.com/236x/72/77/06/727706f7154d4078a1b50702bb87a8ea.jpg",
  },
  {
    id: "6",
    title: "Kaytranada ",
    author: "Artist • kaytranada",
    Image: "https://i.scdn.co/image/ab6761610000e5eb9b9d4fdf5e4cf58e2fa93167",
  },
  {
    id: "7",
    title: "Malcolm Todd",
    author: "Album • Malcolm Todd",
    Image: "https://i.ebayimg.com/images/g/2rMAAeSw1xNolZwe/s-l400.jpg",
  },
  {
    id: "8",
    title: "My Irong Lung",
    author: "Single • Radiohead",
    Image: "https://i.ebayimg.com/images/g/ooAAAOxyni9TGQx3/s-l640.jpg",
  },
];

const Playlist = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          <Ionicons name="arrow-down" size={15} color="white" marginRight="4" />
          <Ionicons name="arrow-up" size={15} color="white" marginLeft="30" />
          <Text style={styles.headerTitle}>Recents</Text>
        </Text>

        <View style={styles.locationContainer}>
          <Ionicons name="grid-outline" size={18} color="white" />
        </View>
      </View>

      <View style={styles.itemsContainer}>
        {items.map((item) => (
          <View key={item.id} style={styles.itemWrapper}>
            <View
              style={item.id === "6" ? styles.itemBoxRounded : styles.itemBox}
            >
              {item.Image && (
                <Image
                  source={{ uri: item.Image }}
                  style={
                    item.id === "6"
                      ? styles.imageStyleRounded
                      : styles.imageStyle
                  }
                />
              )}
            </View>

            <View style={styles.itemInfo}>
              <Text style={styles.itemPrice}>{item.title}</Text>
              <Text
                style={styles.itemLabel}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.author}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Playlist;

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import TopBar from "./Components/Navbars/TopBar";
import { homeStyles } from "./Styles/home.style";

const items = [
  {
    id: "1",
    title: "Liked Songs",
    author: "Playlist • Spotify",
    imageUrl:
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84587ecba4a27774b2f6f07174",
    type: "playlist",
  },
  {
    id: "2",
    title: "All Things Must Pass - 2014 Remaster",
    author: "Album • George Harrison",
    imageUrl:
      "https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/KrMAAOSwEfZghunu/$_57.JPG",
    type: "album",
  },
  {
    id: "3",
    title: "The Bends",
    author: "Album • Radiohead",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b2739293c743fa542094336c5e12",
    type: "album",
  },
  {
    id: "4",
    title: "On Repeat",
    author: "Playlist • Made for you",
    imageUrl:
      "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/repeat/or/en",
    type: "playlist",
  },
  {
    id: "5",
    title: "Gracie Abrams",
    author: "Artist",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9iUoz-fP3IWkI2v59n1KyR7WR-G3veVUDTgH-2rAloJ7dI6yKspYBiJkhqyLGCtE_GFDvbIZw4QNi9kHJgpEkOCsZQMJ2h-0hWRh30yf&s=10",
    type: "artist",
    artistId: "gracie-abrams",
  },
  {
    id: "6",
    title: "Taylor Swift",
    author: "Artist",
    imageUrl:
      "https://globalnews.ca/wp-content/uploads/2019/05/gettyimages-1135889459.jpg?quality=65&strip=all&w=1200",
    type: "artist",
    artistId: "taylor-swift",
  },
  {
    id: "7",
    title: "Abbey Road",
    author: "Album • The Beatles",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
    type: "album",
  },
  {
    id: "8",
    title: "Atif Aslam",
    author: "Artist",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tCa-9TZ6ZKFh5oAYKGksB7yXuh3HxVBKDnDIc9-fG6ZaE3CjST52Fr5lTuxURNGSsgNRZ2V096lyfIRUIdIytXbTRRREEk9FghB_tDH4PQ&s=10",
    type: "artist",
    artistId: "atif-aslam",
  },
];

// Recommended albums for horizontal scroll
const recommendedAlbums = [
  {
    id: "r1",
    title: "Meat is Murder",
    artist: "The Smiths",
    artistId: "the-smiths",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b273ac345598e7697a319cb5b460",
    type: "album",
  },
  {
    id: "r2",
    title: "Heaven Or Las Vegas",
    artist: "Cocteau Twins",
    artistId: "cocteau-twins",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fe6211303e796f3d5b7a0e02",
    type: "album",
  },
  {
    id: "r3",
    title: "The Queen Is Dead",
    artist: "The Smiths",
    artistId: "the-smiths",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQscW4w3kujaPIcaj7u3U5EJAyHRx5Nhj4w&s",
    type: "album",
  },
];

// Featured albums for horizontal scroll
const featuredAlbums = [
  {
    id: "f1",
    title: "opalite",
    artist: "Taylor Swift",
    artistId: "taylor-swift",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b273d7812467811a7da6e6a44902",
    type: "album",
  },
  {
    id: "f2",
    title: "Senorita",
    artist: "Camila Cabello",
    artistId: "camila-cabello",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpX-Elwl6R5dqfJBzte0Rg9aWcwMy5ArxHg&s",
    type: "album",
  },
  {
    id: "f3",
    title: "Pyaar Howa tha",
    artist: "Aima Baig",
    artistId: "aima-baig",
    imageUrl:
      "https://m.media-amazon.com/images/I/61vuoACRtJL._UXNaN_FMjpg_QL85_.jpg",
    type: "album",
  },
];

export default function HomePage() {
  const router = useRouter();

  // Create rows of 2 items each
  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }

  const handleItemPress = (item: any) => {
    if (item.type === "artist") {
      router.push({
        pathname: "/artist",
        params: {
          artistId: item.artistId,
          artistName: item.title,
          artistImage: item.imageUrl,
        },
      });
    } else if (item.type === "album") {
      router.push({
        pathname: "/",
        params: {
          albumId: item.id,
          albumTitle: item.title,
          artistName: item.author.replace("Album • ", ""),
          albumImage: item.imageUrl,
        },
      });
    } else if (item.type === "playlist") {
      router.push({
        pathname: "/",
        params: {
          playlistId: item.id,
          playlistTitle: item.title,
          playlistImage: item.imageUrl,
        },
      });
    }
  };

  const handleArtistPress = (
    artistId: string,
    artistName: string,
    artistImage?: string,
  ) => {
    router.push({
      pathname: "/artist",
      params: {
        artistId,
        artistName,
        artistImage: artistImage || "",
      },
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <TopBar />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={homeStyles.header}>
          <View style={homeStyles.headerTitleContainer}>
            <Ionicons name="arrow-down" size={15} color="white" />
            <Ionicons name="arrow-up" size={15} color="white" />
            <Text style={homeStyles.headerTitle}>Recents</Text>
          </View>

          <View style={homeStyles.locationContainer}>
            <Ionicons name="grid-outline" size={18} color="white" />
          </View>
        </View>

        {/* Map through rows to display items in 2-column grid */}
        <View style={homeStyles.listContainer}>
          {rows.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={homeStyles.row}>
              {row.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={homeStyles.listItem}
                  onPress={() => handleItemPress(item)}
                  activeOpacity={0.7}
                >
                  <View
                    style={
                      item.author.includes("Artist")
                        ? homeStyles.listItemImageRounded
                        : homeStyles.listItemImage
                    }
                  >
                    {item.imageUrl && (
                      <Image
                        source={{ uri: item.imageUrl }}
                        style={
                          item.author.includes("Artist")
                            ? homeStyles.imageRounded
                            : homeStyles.image
                        }
                        resizeMode="cover"
                      />
                    )}
                  </View>
                  <View style={homeStyles.listItemTextContainer}>
                    <Text style={homeStyles.listItemTitle} numberOfLines={1}>
                      {item.title}
                    </Text>
                    <Text style={homeStyles.listItemSubtitle} numberOfLines={1}>
                      {item.author}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        {/* Search Bar - "Ask for some music" */}
        <View style={homeStyles.searchContainer}>
          <View style={homeStyles.searchBar}>
            <Ionicons name="search-outline" size={20} color="#b3b3b3" />
            <Text style={homeStyles.searchText}>Ask for some music</Text>
          </View>
        </View>

        {/* Recommended for today */}
        <View style={homeStyles.artistSection}>
          <Text style={homeStyles.sectionTitle}>Recommended for today</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recommendedAlbums.map((album) => (
              <TouchableOpacity
                key={album.id}
                style={homeStyles.albumCard}
                onPress={() =>
                  handleArtistPress(
                    album.artistId,
                    album.artist,
                    album.imageUrl,
                  )
                }
                activeOpacity={0.7}
              >
                <View style={homeStyles.albumImage}>
                  {album.imageUrl && (
                    <Image
                      source={{ uri: album.imageUrl }}
                      style={homeStyles.albumImageStyle}
                      resizeMode="cover"
                    />
                  )}
                </View>
                <Text style={homeStyles.albumTitle} numberOfLines={1}>
                  {album.title}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    handleArtistPress(album.artistId, album.artist)
                  }
                >
                  <Text style={homeStyles.artistText} numberOfLines={1}>
                    {album.artist}
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Albums featuring songs you like */}
        <Text style={homeStyles.sectionTitle}>
          Albums featuring songs you like
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredAlbums.map((album) => (
            <TouchableOpacity
              key={album.id}
              style={homeStyles.albumCard}
              onPress={() =>
                handleArtistPress(album.artistId, album.artist, album.imageUrl)
              }
              activeOpacity={0.7}
            >
              <View style={homeStyles.albumImage}>
                {album.imageUrl && (
                  <Image
                    source={{ uri: album.imageUrl }}
                    style={homeStyles.albumImageStyle}
                    resizeMode="cover"
                  />
                )}
              </View>
              <Text style={homeStyles.albumTitle} numberOfLines={1}>
                {album.title}
              </Text>
              <TouchableOpacity
                onPress={() => handleArtistPress(album.artistId, album.artist)}
              >
                <Text style={homeStyles.artistText} numberOfLines={1}>
                  {album.artist}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

import { ScrollView, Text, View } from "react-native";
import BottomNavBar from "./Components/BottomNavBar";
import TopBar from "./Components/TopBar";
import { homeStyles } from "./Styles/home.style";

export default function HomePage() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Top Bar Component */}
      <TopBar />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={homeStyles.listContainer}>
          {/* Row 1 */}
          <View style={homeStyles.row}>
            {/* Item 1 - The Bends */}
            <View style={homeStyles.listItem}>
              <View style={homeStyles.listItemImage} />
              <View style={homeStyles.listItemTextContainer}>
                <Text style={homeStyles.listItemTitle}>The Bends</Text>
              </View>
            </View>

            {/* Item 2 - All Things Must Pass */}
            <View style={homeStyles.listItem}>
              <View style={homeStyles.listItemImage} />
              <View style={homeStyles.listItemTextContainer}>
                <Text style={homeStyles.listItemTitle}>
                  All Things Must Pass
                </Text>
              </View>
            </View>
          </View>

          {/* Row 2 */}
          <View style={homeStyles.row}>
            {/* Item 3 - noise rock spacegrunge */}
            <View style={homeStyles.listItem}>
              <View style={homeStyles.listItemImage} />
              <View style={homeStyles.listItemTextContainer}>
                <Text style={homeStyles.listItemTitle}>
                  noise rock spacegrunge
                </Text>
              </View>
            </View>

            {/* Item 4 - On Repeat */}
            <View style={homeStyles.listItem}>
              <View style={homeStyles.listItemImage} />
              <View style={homeStyles.listItemTextContainer}>
                <Text style={homeStyles.listItemTitle}>On Repeat</Text>
              </View>
            </View>
          </View>

          {/* Row 3 */}
          <View style={homeStyles.row}>
            {/* Item 5 - Klaatu */}
            <View style={homeStyles.listItem}>
              <View style={homeStyles.listItemImage} />
              <View style={homeStyles.listItemTextContainer}>
                <Text style={homeStyles.listItemTitle}>Klaatu</Text>
                <Text style={homeStyles.listItemSubtitle}>Artist</Text>
              </View>
            </View>

            {/* Item 6 - Malcolm Todd */}
            <View style={homeStyles.listItem}>
              <View style={homeStyles.listItemImage} />
              <View style={homeStyles.listItemTextContainer}>
                <Text style={homeStyles.listItemTitle}>Malcolm Todd</Text>
                <Text style={homeStyles.listItemSubtitle}>Artist</Text>
              </View>
            </View>
          </View>

          {/* Row 4 */}
          <View style={homeStyles.row}>
            {/* Item 7 - Beatles - Live In Concert */}
            <View style={homeStyles.listItem}>
              <View style={homeStyles.listItemImage} />
              <View style={homeStyles.listItemTextContainer}>
                <Text style={homeStyles.listItemTitle}>
                  Beatles - Live In Concert
                </Text>
              </View>
            </View>

            {/* Item 8 - (Add your eighth item here) */}
            <View style={homeStyles.listItem}>
              <View style={homeStyles.listItemImage} />
              <View style={homeStyles.listItemTextContainer}>
                <Text style={homeStyles.listItemTitle}>Item Title</Text>
                <Text style={homeStyles.listItemSubtitle}>Item Subtitle</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Search Bar - "Ask for some music" */}
        <View style={homeStyles.searchContainer}>
          <View style={homeStyles.searchBar}>
            <Text style={homeStyles.searchIcon}>🔍</Text>
            <Text style={homeStyles.searchText}>Ask for some music</Text>
          </View>
        </View>

        {/* Recommended for today */}

        <View style={homeStyles.artistSection}>
          <Text style={homeStyles.sectionTitle}>Recommended for today</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={homeStyles.albumCard}>
              <View style={homeStyles.albumImage} />
              <Text style={homeStyles.albumTitle}>Meat Is Murder</Text>
              <Text style={homeStyles.artistText}>The Smiths</Text>
            </View>

            <View style={homeStyles.albumCard}>
              <View style={homeStyles.albumImage} />
              <Text style={homeStyles.albumTitle}>Heaven or Las Vegas</Text>
              <Text style={homeStyles.artistText}>Cocteau Twins</Text>
            </View>

            <View style={homeStyles.albumCard}>
              <View style={homeStyles.albumImage} />
              <Text style={homeStyles.albumTitle}>The Queen Is Dead</Text>
              <Text style={homeStyles.artistText}>The Smiths</Text>
            </View>
          </ScrollView>
        </View>

        {/* Albums featuring songs you like */}
        <Text style={homeStyles.sectionTitle}>
          Albums featuring songs you like
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={homeStyles.albumCard}>
            <View style={homeStyles.albumImage} />
            <Text style={homeStyles.albumTitle}>Meat Is Murder</Text>
            <Text style={homeStyles.artistText}>The Smiths</Text>
          </View>

          <View style={homeStyles.albumCard}>
            <View style={homeStyles.albumImage} />
            <Text style={homeStyles.albumTitle}>Heaven or Las Vegas</Text>
            <Text style={homeStyles.artistText}>Cocteau Twins</Text>
          </View>

          <View style={homeStyles.albumCard}>
            <View style={homeStyles.albumImage} />
            <Text style={homeStyles.albumTitle}>The Queen Is Dead</Text>
            <Text style={homeStyles.artistText}>The Smiths</Text>
          </View>
        </ScrollView>
      </ScrollView>

      <BottomNavBar />
    </View>
  );
}

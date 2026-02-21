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
      >
        <Text style={homeStyles.sectionTitle}>Recommended for today</Text>

        {/* THE SMITHS Section */}

        <View style={homeStyles.artistSection}>
          <Text style={homeStyles.artistName}>THE SMITHS</Text>

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
              <Text style={homeStyles.albumTitle}>Heaven or Las Vegas</Text>
              <Text style={homeStyles.artistText}>Cocteau Twins</Text>
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
            <Text style={homeStyles.albumTitle}>Heaven or Las Vegas</Text>
            <Text style={homeStyles.artistText}>Cocteau Twins</Text>
          </View>
        </ScrollView>
      </ScrollView>

      <BottomNavBar />
    </View>
  );
}

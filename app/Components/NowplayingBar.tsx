import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { nowPlayingStyles } from "../Styles/nowplaying.style";

interface NowPlayingBarProps {
  onPress?: () => void;
  onPlayPause?: () => void;
  onNext?: () => void;
  isPlaying?: boolean;
  songTitle?: string;
  artistName?: string;
  imageUrl?: string;
}

const NowPlayingBar: React.FC<NowPlayingBarProps> = ({
  onPress,
  onPlayPause,
  onNext,
  isPlaying = true,
  songTitle = "In Rainbow",
  artistName = "Radiohearts",
  imageUrl,
}) => {
  return (
    <TouchableOpacity
      style={nowPlayingStyles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={nowPlayingStyles.content}>
        {/* Album Art */}
        <View style={nowPlayingStyles.imageContainer}>
          {imageUrl ? (
            <Image
              source={{ uri: imageUrl }}
              style={nowPlayingStyles.image}
              resizeMode="cover"
            />
          ) : (
            <View style={nowPlayingStyles.placeholderImage} />
          )}
        </View>

        {/* Song Info */}
        <View style={nowPlayingStyles.songInfo}>
          <Text style={nowPlayingStyles.songTitle} numberOfLines={1}>
            {songTitle}
          </Text>
          <Text style={nowPlayingStyles.artistName} numberOfLines={1}>
            {artistName}
          </Text>
        </View>

        {/* Controls */}
        <View style={nowPlayingStyles.controls}>
          <TouchableOpacity
            onPress={onPlayPause}
            style={nowPlayingStyles.controlButton}
          >
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onNext}
            style={nowPlayingStyles.controlButton}
          >
            <Ionicons name="play-skip-forward" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NowPlayingBar;

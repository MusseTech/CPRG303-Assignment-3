import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
} from "react-native";
import AlertButton from '../../components/AlertButton';

export default function PlayerScreen() {
    const [isPlaying, setIsPlaying] = useState(true);

    return (
    <SafeAreaView style={StyleSheet.safe}>
        <StatusBar barStyle="light-content" />
    
    {/* Top bar*/}
    
    )
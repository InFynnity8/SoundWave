import React, { useState, useEffect } from "react";
import { View, Button } from "react-native";
import { Audio } from "expo-av";

const AudioPlayer = ({ source }) => {
  const [sound, setSound] = useState();

  // Load the audio file on component mount

  const loadSound = async () => {
    console.log("loading");
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: source },
        { shouldPlay: true, isLooping: false }
      );
      setSound(sound);
      await sound.playAsync();

      console.log(" playing ", sound, source);
    } catch (error) {
      console.error("Error loading sound:", error);
    }
  };

  useEffect(() => {
    return () => {
      // Unload the sound when component unmounts
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [source]);

  return (
    <View>
      <Button title="Play Sound" onPress={loadSound} />
    </View>
  );
};

export default AudioPlayer;

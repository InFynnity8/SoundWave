import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SoundRecorder from 'react-native-sound-recorder';
import axios from 'axios';

// Function to start recording audio
const startRecording = () => {
  SoundRecorder.start(SoundRecorder.PATH_DOCUMENT + '/test.mp4')
    .then(function() {
      console.log('started recording');
    });
};

// Function to stop recording audio
const stopRecording = async () => {
  try {
    const result = await SoundRecorder.stop();
    console.log('stopped recording, audio file saved at: ' + result.path);
    return result.path;
  } catch (error) {
    console.error('Error stopping recording: ', error);
  }
};

// Function to identify song using Shazam API
const identifySong = async (audioFilePath) => {
  try {
    const formData = new FormData();
    formData.append('file', {
      uri: 'file://' + audioFilePath,
      name: 'test.mp4',
      type: 'audio/mp4'
    });

    const response = await axios.post('YOUR_SHAZAM_API_ENDPOINT', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'YOUR_API_KEY_HEADER': 'YOUR_API_KEY'
      }
    });

    console.log('Song identified: ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error identifying song: ', error);
  }
};






const Shazam = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons
        name="waveform"
        size={200}
        color="rgba(9, 202, 225, 1)"
      />
    </SafeAreaView>
  );
};

export default Shazam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

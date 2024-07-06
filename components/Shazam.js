import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import SoundRecorder from 'react-native-sound-recorder';
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













// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// import axios from 'axios';
// import { Buffer } from 'buffer';

// const audioRecorderPlayer = new AudioRecorderPlayer();

// const Shazam = () => {
//   const [recording, setRecording] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const API_KEY = 'your_audd_api_key'; // Replace with your API key

//   const startRecording = async () => {
//     setRecording(true);
//     setResult(null);
//     setError(null);
//     const path = 'recording.mp4';
//     await audioRecorderPlayer.startRecorder(path);
//   };

//   const stopRecording = async () => {
//     const result = await audioRecorderPlayer.stopRecorder();
//     setRecording(false);
//     return result;
//   };

//   const handleRecording = async () => {
//     if (recording) {
//       const audioPath = await stopRecording();
//       processRecording(audioPath);
//     } else {
//       startRecording();
//     }
//   };

//   const processRecording = async (filePath) => {
//     setLoading(true);
//     try {
//       const audioFile = await fetch(filePath);
//       const audioBlob = await audioFile.blob();
//       const reader = new FileReader();
//       reader.readAsArrayBuffer(audioBlob);
//       reader.onloadend = async () => {
//         const buffer = Buffer.from(reader.result);
//         const base64Audio = buffer.toString('base64');
//         queryAudd(base64Audio);
//       };
//     } catch (e) {
//       setError(e.message);
//       setLoading(false);
//     }
//   };

//   const queryAudd = async (base64Audio) => {
//     try {
//       const response = await axios.post(
//         'https://api.audd.io/',
//         {
//           api_token: API_KEY,
//           audio: base64Audio,
//           return: 'apple_music,spotify',
//         }
//       );
//       setResult(response.data);
//     } catch (e) {
//       setError(e.message);
//     }
//     setLoading(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Button
//         title={recording ? 'Stop Recording' : 'Start Recording'}
//         onPress={handleRecording}
//       />
//       {loading && <ActivityIndicator size="large" color="#0000ff" />}
//       {result && (
//         <View>
//           <Text style={styles.resultTitle}>Result:</Text>
//           <Text>{JSON.stringify(result, null, 2)}</Text>
//         </View>
//       )}
//       {error && (
//         <View>
//           <Text style={styles.error}>Error: {error}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   resultTitle: {
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   error: {
//     color: 'red'
//   }
// })

// export default Shazam;

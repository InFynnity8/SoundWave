import { StyleSheet, StatusBar } from "react-native";
import Session from "./screens/Session.js";

export default function App() {
  return (
    <>
      <StatusBar color="dark"/>
      <Session />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#0A4A3B",
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "636",
  },
});

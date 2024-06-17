import { View, Text, StyleSheet, Image } from "react-native";
import LoadingPage from "../components/LoadingPage.js";
import GetStarted from "../components/GetStarted.js";
import { useState } from "react";

const Welcome = () => {
  const [page, setPage] = useState([<LoadingPage/>])

 setTimeout(() => {
    setPage([<GetStarted/>])
  }, 5000)

  return page;
};

export default Welcome;

const styles = StyleSheet.create({
  
});
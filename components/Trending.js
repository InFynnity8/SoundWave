import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

const Trending = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.text}>Trending music <Ionicons name="trending-up" size={22} color="black" /></Text>
        <View style={styles.recent}>
          <View>
            <View style={styles.art}>
              <Image
                source={require("../assets/art1.jpg")}
                style={styles.artImage}
              />
              <Text style={styles.innerText}>Raymond Chris</Text>
            </View>
            <View style={styles.art}>
              <Image
                source={require("../assets/art2.jpg")}
                style={styles.artImage}
              />
              <Text style={styles.innerText}>Johnny West</Text>
            </View>
            <View style={styles.art}>
              <Image
                source={require("../assets/art3.jpg")}
                style={styles.artImage}
              />
              <Text style={styles.innerText}>Sam Zane</Text>
            </View>
            <View style={styles.art}>
              <Image
                source={require("../assets/art4.jpg")}
                style={styles.artImage}
              />
              <Text style={styles.innerText}>King Luther</Text>
            </View>
            <View style={styles.art}>
              <Image
                source={require("../assets/art6.jpg")}
                style={styles.artImage}
              />
              <Text style={styles.innerText}>Jerry Brook </Text>
            </View>
          </View>
          <View>
            <View style={styles.art}>
              <Image
                source={require("../assets/art5.webp")}
                style={styles.artImage}
              />
              <Text style={styles.innerText}>Evil Dew</Text>
            </View>
            <View style={styles.art}>
              <Image
                source={require("../assets/art6.jpg")}
                style={styles.artImage}
              />
              <Text style={styles.innerText}>Gracely Man </Text>
            </View>
            <View style={styles.art}>
              <Image
                source={require("../assets/art5.webp")}
                style={styles.artImage}
              />
              <Text style={styles.innerText}>Evil Dew</Text>
            </View>
            <View style={styles.art}>
              <Image
                source={require("../assets/art6.jpg")}
                style={styles.artImage}
              />
              <Text style={styles.innerText}>Jerry Brook </Text>
            </View>
            <View style={styles.art}>
              <Image
                source={require("../assets/art6.jpg")}
                style={styles.artImage}
              />
              <Text style={styles.innerText}>Jerry Brook </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recent: {
    marginBottom: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  innerText: {
    color: "#0A4A3B",
    fontSize: 13,
    fontWeight: "600",
    marginVertical: 2,
    marginHorizontal: 7,
  },
  art: {
    justifyContent: "center",
    marginBottom: 10
  },
  artImage: {
    height: 110,
    width: 170,
    marginHorizontal: 5,
  },
});

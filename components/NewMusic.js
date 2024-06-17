import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const NewMusic = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.recent}>
        <Text style={styles.text}>Recently played</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
              source={require("../assets/art5.webp")}
              style={styles.artImage}
            />
            <Text style={styles.innerText}>Evil Dew</Text>
          </View>
        </ScrollView>
      </View>

      <View>
        <Text style={styles.text}>Your favorite artists</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.recent}
        >
          <View style={styles.artist}>
            <Image
              source={require("../assets/singer1.jpg")}
              style={styles.artistImage}
            />
            <Text style={styles.innerText}>Christabel Andor</Text>
          </View>
          <View style={styles.artist}>
            <Image
              source={require("../assets/singer2.webp")}
              style={styles.artistImage}
            />
            <Text style={styles.innerText}>Johnny West</Text>
          </View>
          <View style={styles.artist}>
            <Image
              source={require("../assets/singer3.jpg")}
              style={styles.artistImage}
            />
            <Text style={styles.innerText}>Sam Zane</Text>
          </View>
          <View style={styles.artist}>
            <Image
              source={require("../assets/singer4.jpg")}
              style={styles.artistImage}
            />
            <Text style={styles.innerText}>Linda Kay</Text>
          </View>
          <View style={styles.artist}>
            <Image
              source={require("../assets/singer5.webp")}
              style={styles.artistImage}
            />
            <Text style={styles.innerText}>Evil Dew</Text>
          </View>
        </ScrollView>
      </View>

      <View>
        <Text style={styles.text}>Your top mixes</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.recent}
        >
          <View style={styles.art}>
            <Image
              source={require("../assets/art6.jpg")}
              style={styles.artImage}
            />
            <Text style={styles.innerText}>Afro </Text>
          </View>
          <View style={styles.art}>
            <Image
              source={require("../assets/art7.png")}
              style={styles.artImage}
            />
            <Text style={styles.innerText}>Hip Pop</Text>
          </View>
          <View style={styles.art}>
            <Image
              source={require("../assets/art8.webp")}
              style={styles.artImage}
            />
            <Text style={styles.innerText}>Jazz</Text>
          </View>
          <View style={styles.art}>
            <Image
              source={require("../assets/art9.jpg")}
              style={styles.artImage}
            />
            <Text style={styles.innerText}>High Life</Text>
          </View>
          <View style={styles.art}>
            <Image
              source={require("../assets/art10.jpeg")}
              style={styles.artImage}
            />
            <Text style={styles.innerText}>Country</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default NewMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recent: {
    marginBottom: 10,
  },
  text: {
    color: "#0A4A3B",
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 20,
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
  },
  artImage: {
    height: 150,
    width: 150,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  artist: {
    alignItems: "center",
    justifyContent: "center",
  },
  artistImage: {
    height: 100,
    width: 100,
    borderRadius: "100%",
    marginHorizontal: 5,
  },
});

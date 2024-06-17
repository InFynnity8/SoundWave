import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="#0A4A3B"/>
          </Pressable>
          <Text style={styles.text}>User Profile</Text>
          <Pressable onPress={()=> navigation.navigate('Settings')}>
            <Feather name="settings" size={24} color="#0A4A3B" />
          </Pressable>
        </View>
        <View style={styles.profileImage}>
          <Image
            source={require("../assets/singer4.jpg")}
            style={styles.image}
          />
          <Text style={styles.imageText}>Edit profile image</Text>
        </View>
        <View style={styles.userInfo}>
          <View style={styles.infoLabel}>
            <Text style={styles.labelText}>Name</Text>
            <Text style={styles.labelText}>Username</Text>
            <Text style={styles.labelText}>Email</Text>
            <Text style={styles.labelText}>Bio</Text>
          </View>
          <View style={styles.infoValue}>
            <Text style={styles.valueText}>name</Text>
            <Text style={styles.valueText}>@username</Text>
            <Text style={styles.valueText}>name@domain.com</Text>
            <Text style={styles.valueText}>A description of this user.</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    color: "#0A4A3B",
    fontSize: 20,
    fontWeight: "600",
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    padding: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  profileImage: {
    alignItems: "center",
  },
  image: {
    borderRadius: "100%",
    height: 80,
    width: 80,
    marginVertical: 10,
  },
  imageText: {
    color: "rgba(4, 76, 56, 0.71)",
    fontSize: 15,
  },
  userInfo: {
    flexDirection: "row",
    flex: 1,
    marginVertical: 40,
    marginHorizontal: 20,
  },
  infoLabel: {
    flex: 1,
  },
  infoValue: {
    flex: 2,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0A4A3B",
    marginVertical: 1,
    height: 40,
  },
  valueText: {
    fontSize: 16,
    color: "black",
    marginVertical: 1,
    height: 40,
  },
});

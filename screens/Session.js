import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Home from "../components/Home.js";
import Search from "../components/Search.js";
import Library from "../components/Library.js";
import Profile from "../components/Profile.js";
import Albums from "./Albums.js";
import Following from "./Following.js";
import YourUplaods from "./YourUploads.js";
import LikedTracks from "./LikedTracks.js";
import Stream from "./Stream.js";
import Playlists from "./Playlists.js";
import Settings from "./Settings.js";
import Shazam from "../components/Shazam.js";
import SignIn from "./SignIn.js";
import Welcome from "./Welcome.js";
import Account from "../components/Account.js"
import Inbox from "../components/Inbox.js";
import Notifications from "../components/Notifications.js";
import Storage from "../components/Storage.js";
import Analytics from "../components/Analytics.js";
import Advertising from "../components/Advertising.js";
import Legal from "../components/Legal.js";
import SignUp from "./SignUp.js"
import ForgottenPassword from "../components/forgottenPassword.js";
import OTP from "../components/OTP.js";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={24} color="#0A4A3B" />
            ) : (
              <Ionicons name="home-outline" size={24} color="#0A4A3B" />
            ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="search" size={24} color="#0A4A3B" />
            ) : (
              <Ionicons name="search-outline" size={24} color="#0A4A3B" />
            ),
        }}
      />

      <Tab.Screen
        name="Shazam"
        component={Shazam}
        options={{
          tabBarLabel: "Shazam",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="waveform" size={40} color="rgba(9, 202, 225, 1)" />
            ) : (
              <MaterialCommunityIcons
                name="waveform"
                size={30}
                color="#0A4A3B"
              />
            ),
        }}
      />

      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: "Library",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons
                name="my-library-music"
                size={24}
                color="#0A4A3B"
              />
            ) : (
              <MaterialCommunityIcons
                name="music-box-multiple-outline"
                size={24}
                color="#0A4A3B"
              />
            ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="user-circle-o" size={24} color="#0A4A3B" />
            ) : (
              <FontAwesome5 name="user-circle" size={24} color="#0A4A3B" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const Session = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Liked"
          component={LikedTracks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Albums"
          component={Albums}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Following"
          component={Following}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Playlists"
          component={Playlists}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Stream"
          component={Stream}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Uploads"
          component={YourUplaods}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="Inbox"
          component={Inbox}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Storage"
          component={Storage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Analytics"
          component={Analytics}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Advertising"
          component={Advertising}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Legal"
          component={Legal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgottenPassword"
          component={ForgottenPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Session;


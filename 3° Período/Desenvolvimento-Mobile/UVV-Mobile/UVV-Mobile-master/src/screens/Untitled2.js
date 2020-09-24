import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  StatusBar
} from "react-native";
import MaterialCard3 from "../components/MaterialCard3";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialIconButtonsFooter from "../components/MaterialIconButtonsFooter";
import MaterialHeader12 from "../components/MaterialHeader12";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Untitled2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image1Stack}>
        <ImageBackground
          source={require("../assets/images/noname.png")}
          resizeMode="contain"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <Text style={styles.feed}>FEED</Text>
        </ImageBackground>
        <MaterialCard3 style={styles.materialCard4}></MaterialCard3>
        <MaterialIconTextButtonsFooter
          style={styles.materialIconTextButtonsFooter}
        ></MaterialIconTextButtonsFooter>
        <MaterialIconButtonsFooter
          style={styles.materialIconButtonsFooter}
        ></MaterialIconButtonsFooter>
        <MaterialCard3 style={styles.materialCard3}></MaterialCard3>
        <MaterialHeader12 style={styles.materialHeader12}></MaterialHeader12>
        <MaterialCommunityIconsIcon
          name="numeric-1-box"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
        <MaterialCommunityIconsIcon
          name="numeric-1-box"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
      </View>
      <StatusBar animated={true}></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 13,
    borderColor: "#000000",
    borderWidth: 0
  },
  image1: {
    top: 0,
    left: 0,
    width: 620,
    height: 857,
    position: "absolute"
  },
  image1_imageStyle: {
    opacity: 0.39
  },
  feed: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-700",
    marginTop: 48,
    marginLeft: 230
  },
  materialCard4: {
    top: 359,
    left: 71,
    width: 375,
    height: 256,
    position: "absolute",
    borderRadius: 13,
    borderColor: "#000000",
    borderWidth: 0
  },
  materialIconTextButtonsFooter: {
    top: 722,
    left: 71,
    width: 375,
    height: 56,
    position: "absolute"
  },
  materialIconButtonsFooter: {
    top: 666,
    left: 71,
    width: 375,
    height: 56,
    position: "absolute"
  },
  materialCard3: {
    top: 88,
    left: 71,
    width: 375,
    height: 256,
    position: "absolute"
  },
  materialHeader12: {
    top: 0,
    left: 71,
    width: 375,
    height: 88,
    position: "absolute",
    borderColor: "#000000",
    borderWidth: 0
  },
  icon: {
    color: "rgba(254,0,0,1)",
    fontSize: 20,
    left: 386,
    top: 722,
    position: "absolute"
  },
  icon1: {
    color: "rgba(254,0,0,1)",
    fontSize: 20,
    left: 406,
    top: 674,
    position: "absolute"
  },
  image1Stack: {
    width: 620,
    height: 857,
    marginLeft: -71
  }
});

export default Untitled2;

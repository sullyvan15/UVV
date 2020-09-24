import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  StatusBar
} from "react-native";
import MaterialCardWithImageAndTitle1 from "../components/MaterialCardWithImageAndTitle1";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialIconButtonsFooter from "../components/MaterialIconButtonsFooter";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialHeader12 from "../components/MaterialHeader12";

function Untitled4(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image1Stack}>
        <ImageBackground
          source={require("../assets/images/noname.png")}
          resizeMode="contain"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <Text style={styles.trabalhos}>TRABALHOS</Text>
        </ImageBackground>
        <MaterialCardWithImageAndTitle1
          style={styles.materialCardWithImageAndTitle1}
        ></MaterialCardWithImageAndTitle1>
        <MaterialIconTextButtonsFooter
          style={styles.materialIconTextButtonsFooter1}
        ></MaterialIconTextButtonsFooter>
        <MaterialIconButtonsFooter
          style={styles.materialIconButtonsFooter1}
        ></MaterialIconButtonsFooter>
        <MaterialCommunityIconsIcon
          name="numeric-1-box"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <MaterialCommunityIconsIcon
          name="numeric-1-box"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <MaterialHeader12 style={styles.materialHeader1}></MaterialHeader12>
      </View>
      <StatusBar></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
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
  trabalhos: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-700",
    marginTop: 48,
    marginLeft: 199
  },
  materialCardWithImageAndTitle1: {
    top: 130,
    left: 79,
    width: 359,
    height: 154,
    backgroundColor: "rgba(80,227,194,1)",
    position: "absolute",
    borderRadius: 14,
    borderColor: "#000000",
    borderWidth: 0
  },
  materialIconTextButtonsFooter1: {
    top: 712,
    left: 71,
    width: 375,
    height: 56,
    position: "absolute"
  },
  materialIconButtonsFooter1: {
    top: 656,
    left: 71,
    width: 375,
    height: 56,
    position: "absolute"
  },
  icon1: {
    color: "rgba(254,0,0,1)",
    fontSize: 20,
    left: 406,
    top: 664,
    position: "absolute"
  },
  icon2: {
    color: "rgba(254,0,0,1)",
    fontSize: 20,
    left: 386,
    top: 712,
    position: "absolute"
  },
  materialHeader1: {
    top: 0,
    left: 71,
    width: 375,
    height: 88,
    position: "absolute"
  },
  image1Stack: {
    width: 620,
    height: 857,
    marginLeft: -71
  }
});

export default Untitled4;

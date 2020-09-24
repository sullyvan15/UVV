import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialRadio2 from "../components/MaterialRadio2";
import MaterialButtonViolet from "../components/MaterialButtonViolet";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/noname.png")}
        resizeMode="contain"
        style={styles.image2}
        imageStyle={styles.image2_imageStyle}
      >
        <Image
          source={require("../assets/images/Versao_preferencial_PNG1.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <Icon name="user-circle" style={styles.icon1}></Icon>
        <Text style={styles.bemV}>Bem vindo de volta, Sullyvan :)</Text>
        <MaterialRadio2 style={styles.materialRadio2}></MaterialRadio2>
        <MaterialButtonViolet
          text1="ENTRAR"
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet>
      </ImageBackground>
      <StatusBar></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image2: {
    width: 620,
    height: 857,
    marginLeft: -71
  },
  image2_imageStyle: {},
  image3: {
    width: 200,
    height: 200,
    marginTop: 70,
    marginLeft: 157
  },
  icon1: {
    color: "rgba(0,0,0,1)",
    fontSize: 124,
    height: 124,
    width: 93,
    marginTop: 38,
    marginLeft: 197
  },
  bemV: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    marginTop: 35,
    marginLeft: 91
  },
  materialRadio2: {
    width: 48,
    height: 43,
    backgroundColor: "rgba(216,75,75,1)",
    marginTop: 7,
    marginLeft: 545
  },
  materialButtonViolet1: {
    width: 309,
    height: 69,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: 42,
    marginLeft: 104
  }
});

export default Untitled1;

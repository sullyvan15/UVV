import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  StatusBar
} from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialCheckbox from "../components/MaterialCheckbox";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image1Stack}>
        <ImageBackground
          source={require("../assets/images/noname.png")}
          resizeMode="contain"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <Image
            source={require("../assets/images/Versao_preferencial_PNG1.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </ImageBackground>
        <MaterialButtonViolet
          style={styles.materialButtonViolet}
        ></MaterialButtonViolet>
        <MaterialRightIconTextbox
          textInput1="Senha"
          style={styles.materialRightIconTextbox}
        ></MaterialRightIconTextbox>
        <MaterialUnderlineTextbox
          style={styles.materialUnderlineTextbox}
        ></MaterialUnderlineTextbox>
        <MaterialCheckbox style={styles.materialCheckbox}></MaterialCheckbox>
        <Text style={styles.habilitarDigtal}>Habilitar digtal</Text>
      </View>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        hidden={false}
      ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  image2: {
    width: 200,
    height: 200,
    marginTop: 70,
    marginLeft: 157
  },
  materialButtonViolet: {
    top: 584,
    width: 309,
    height: 69,
    position: "absolute",
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 0,
    left: 104
  },
  materialRightIconTextbox: {
    top: 377,
    left: 86,
    width: 342,
    height: 58,
    position: "absolute"
  },
  materialUnderlineTextbox: {
    top: 301,
    left: 86,
    width: 345,
    height: 43,
    position: "absolute"
  },
  materialCheckbox: {
    top: 449,
    left: 91,
    width: 40,
    height: 40,
    position: "absolute"
  },
  habilitarDigtal: {
    top: 462,
    left: 131,
    color: "#121212",
    position: "absolute",
    fontSize: 15,
    fontFamily: "roboto-regular"
  },
  image1Stack: {
    width: 620,
    height: 857,
    marginLeft: -71
  }
});

export default Untitled;

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  StatusBar
} from "react-native";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialIconButtonsFooter from "../components/MaterialIconButtonsFooter";
import MaterialHeader12 from "../components/MaterialHeader12";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";
import MaterialUnderlineTextbox2 from "../components/MaterialUnderlineTextbox2";
import MaterialUnderlineTextbox3 from "../components/MaterialUnderlineTextbox3";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Untitled3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image1Stack}>
        <ImageBackground
          source={require("../assets/images/noname.png")}
          resizeMode="contain"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <View style={styles.rect5}>
            <View style={styles.loremIpsum11Row}>
              <Text style={styles.loremIpsum11}>09:15 - 10:55</Text>
              <Text style={styles.loremIpsum12}>
                Arquiterura e Org. De Computadores
              </Text>
            </View>
          </View>
        </ImageBackground>
        <MaterialIconTextButtonsFooter
          style={styles.materialIconTextButtonsFooter1}
        ></MaterialIconTextButtonsFooter>
        <MaterialIconButtonsFooter
          style={styles.materialIconButtonsFooter1}
        ></MaterialIconButtonsFooter>
        <MaterialHeader12 style={styles.materialHeader1}></MaterialHeader12>
        <Text style={styles.horarios}>HORÁRIOS</Text>
        <MaterialUnderlineTextbox1
          textInput1="Segunda"
          style={styles.materialUnderlineTextbox1}
        ></MaterialUnderlineTextbox1>
        <MaterialUnderlineTextbox2
          textInput1="Terça"
          style={styles.materialUnderlineTextbox2}
        ></MaterialUnderlineTextbox2>
        <MaterialUnderlineTextbox3
          textInput1="Quarta"
          style={styles.materialUnderlineTextbox3}
        ></MaterialUnderlineTextbox3>
        <MaterialCommunityIconsIcon
          name="numeric-1-box"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <MaterialCommunityIconsIcon
          name="numeric-1-box"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <View style={styles.rect}>
          <View style={styles.loremIpsumRow}>
            <Text style={styles.loremIpsum}>07:15 - 08:55</Text>
            <Text style={styles.loremIpsum2}>Linguagens de Programação</Text>
          </View>
        </View>
        <View style={styles.rect1}>
          <View style={styles.loremIpsum3Row}>
            <Text style={styles.loremIpsum3}>09:15 - 10:55</Text>
            <Text style={styles.loremIpsum4}>
              Arquiterura e Org. De Computadores
            </Text>
          </View>
        </View>
        <View style={styles.rect2}>
          <View style={styles.loremIpsum5Row}>
            <Text style={styles.loremIpsum5}>07:15 - 08:55</Text>
            <Text style={styles.loremIpsum6}>Linguagens de Programação</Text>
          </View>
        </View>
        <View style={styles.rect3}>
          <View style={styles.loremIpsum7Row}>
            <Text style={styles.loremIpsum7}>09:15 - 10:55</Text>
            <Text style={styles.loremIpsum8}>
              Arquiterura e Org. De Computadores
            </Text>
          </View>
        </View>
        <View style={styles.rect4}>
          <View style={styles.loremIpsum9Row}>
            <Text style={styles.loremIpsum9}>07:15 - 08:55</Text>
            <Text style={styles.loremIpsum10}>Linguagens de Programação</Text>
          </View>
        </View>
      </View>
      <StatusBar animated={true}></StatusBar>
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
  rect5: {
    width: 290,
    height: 24,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    marginTop: 454,
    marginLeft: 81
  },
  loremIpsum11: {
    color: "#121212",
    opacity: 0.8,
    fontFamily: "roboto-regular"
  },
  loremIpsum12: {
    color: "#121212",
    fontSize: 12,
    fontFamily: "roboto-regular",
    marginLeft: 7
  },
  loremIpsum11Row: {
    height: 14,
    flexDirection: "row",
    flex: 1,
    marginRight: 6,
    marginLeft: 4,
    marginTop: 5
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
  materialHeader1: {
    top: 0,
    left: 71,
    width: 375,
    height: 88,
    position: "absolute"
  },
  horarios: {
    top: 48,
    left: 199,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-700"
  },
  materialUnderlineTextbox1: {
    top: 112,
    left: 78,
    width: 360,
    height: 43,
    position: "absolute"
  },
  materialUnderlineTextbox2: {
    top: 238,
    left: 78,
    width: 360,
    height: 43,
    position: "absolute"
  },
  materialUnderlineTextbox3: {
    top: 363,
    left: 82,
    width: 360,
    height: 43,
    position: "absolute"
  },
  icon1: {
    color: "rgba(254,0,0,1)",
    fontSize: 20,
    left: 386,
    top: 712,
    position: "absolute"
  },
  icon2: {
    color: "rgba(254,0,0,1)",
    fontSize: 20,
    left: 406,
    top: 664,
    position: "absolute"
  },
  rect: {
    top: 165,
    left: 78,
    width: 290,
    height: 24,
    backgroundColor: "rgba(74,144,226,1)",
    position: "absolute",
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row"
  },
  loremIpsum: {
    color: "#121212",
    opacity: 0.8,
    fontFamily: "roboto-regular"
  },
  loremIpsum2: {
    color: "rgba(255,255,255,1)",
    fontFamily: "roboto-regular",
    marginLeft: 8
  },
  loremIpsumRow: {
    height: 14,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 4,
    marginTop: 5
  },
  rect1: {
    top: 200,
    left: 79,
    width: 290,
    height: 24,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row"
  },
  loremIpsum3: {
    color: "#121212",
    opacity: 0.8,
    fontFamily: "roboto-regular"
  },
  loremIpsum4: {
    color: "#121212",
    fontSize: 12,
    fontFamily: "roboto-regular",
    marginLeft: 7
  },
  loremIpsum3Row: {
    height: 14,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 3,
    marginTop: 5
  },
  rect2: {
    top: 294,
    left: 78,
    width: 290,
    height: 24,
    backgroundColor: "rgba(74,144,226,1)",
    position: "absolute",
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row"
  },
  loremIpsum5: {
    color: "#121212",
    opacity: 0.8,
    fontFamily: "roboto-regular"
  },
  loremIpsum6: {
    color: "rgba(255,255,255,1)",
    fontFamily: "roboto-regular",
    marginLeft: 8
  },
  loremIpsum5Row: {
    height: 14,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 3,
    marginTop: 5
  },
  rect3: {
    top: 329,
    left: 78,
    width: 290,
    height: 24,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row"
  },
  loremIpsum7: {
    color: "#121212",
    opacity: 0.8,
    fontFamily: "roboto-regular"
  },
  loremIpsum8: {
    color: "#121212",
    fontSize: 12,
    fontFamily: "roboto-regular",
    marginLeft: 8
  },
  loremIpsum7Row: {
    height: 14,
    flexDirection: "row",
    flex: 1,
    marginRight: 6,
    marginLeft: 3,
    marginTop: 5
  },
  rect4: {
    top: 419,
    left: 81,
    width: 290,
    height: 24,
    backgroundColor: "rgba(74,144,226,1)",
    position: "absolute",
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row"
  },
  loremIpsum9: {
    color: "#121212",
    opacity: 0.8,
    fontFamily: "roboto-regular"
  },
  loremIpsum10: {
    color: "rgba(255,255,255,1)",
    fontFamily: "roboto-regular",
    marginLeft: 8
  },
  loremIpsum9Row: {
    height: 14,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 4,
    marginTop: 5
  },
  image1Stack: {
    width: 620,
    height: 857,
    marginLeft: -71
  }
});

export default Untitled3;

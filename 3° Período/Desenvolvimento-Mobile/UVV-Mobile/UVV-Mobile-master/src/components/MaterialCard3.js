import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";

function MaterialCard3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <TouchableOpacity style={styles.button2}>
          <Image
            source={require("../assets/images/baixados.gif")}
            style={styles.leftImage}
          ></Image>
          <View style={styles.headerContent}>
            <Text style={styles.textStyle}>Developer Survey Results 2019</Text>
            <Text style={styles.noteTextStyle}>Linguagens de Programação</Text>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.rect}>
        <Text style={styles.bodyText}>
          Olá Turma;{"\n"}Material atualizado sobre desenvolvimento.{"\n"}
          https://insights.stackoverflow.com/survey/2019{"\n"}Bons estudos.
          {"\n"}Alessandro
        </Text>
      </View>
      <EntypoIcon name="calendar" style={styles.icon}></EntypoIcon>
      <Text style={styles.loremIpsum}>12 Mar</Text>
      <EntypoIcon name="chat" style={styles.icon2}></EntypoIcon>
      <EntypoIcon name="log-out" style={styles.icon3}></EntypoIcon>
      <Svg viewBox="0 0 0.00 1.00" style={styles.ellipse}>
        <Ellipse
          strokeWidth={1}
          fill="rgba(230, 230, 230,1)"
          stroke="rgba(230, 230, 230,1)"
          cx={0}
          cy={1}
          rx={0}
          ry={1}
        ></Ellipse>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  button: {
    height: 72,
    backgroundColor: "rgba(74,144,226,1)",
    flexDirection: "row",
    alignItems: "center",
    padding: 16
  },
  button2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  leftImage: {
    width: 40,
    height: 40,
    backgroundColor: "#CCC",
    borderRadius: 20
  },
  headerContent: {
    justifyContent: "center",
    paddingLeft: 16
  },
  textStyle: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 20
  },
  noteTextStyle: {
    color: "rgba(255,255,255,1)",
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  rect: {
    padding: 16
  },
  bodyText: {
    color: "#424242",
    fontSize: 14,
    lineHeight: 20
  },
  icon: {
    top: 16,
    left: 331,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  loremIpsum: {
    top: 42,
    left: 321,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "roboto-regular"
  },
  icon2: {
    top: 48,
    left: 41,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  icon3: {
    top: 218,
    left: 15,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 26
  },
  ellipse: {
    top: 36,
    left: 392,
    width: 0,
    height: 1,
    position: "absolute"
  }
});

export default MaterialCard3;

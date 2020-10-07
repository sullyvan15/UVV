import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Untitled3(props) {
  return (
    <View style={styles.root}>
      <View style={styles.button1Stack}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Untitled")}
          style={styles.button1}
        >
          <Text style={styles.signUpIfYoureN}>ENTRAR</Text>
        </TouchableOpacity>
        <View style={styles.loginButton}>
          <View style={styles.pathStack}>
            <Svg viewBox="-0 -0 60 60" style={styles.path}>
              <Path strokeWidth={0} fill="rgba(209,30,72,1)" d=""></Path>
            </Svg>
            <Svg viewBox="-0 -0 23.7256632441968 14" style={styles.path1}>
              <Path strokeWidth={0} fill="rgba(255,255,255,1)" d=""></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.password13}>
          <Text style={styles.password122}>CPF (Opcional)</Text>
          <Svg
            viewBox="-0.5 -0.5 276.9995437982689 4.500909915843749"
            style={styles.path222}
          >
            <Path
              strokeWidth={2}
              fill="transparent"
              stroke="rgba(185,185,185,1)"
              d=""
            ></Path>
          </Svg>
        </View>
      </View>
      <View style={styles.passwordStack}>
        <View style={styles.password}>
          <Text style={styles.password1}>Telefone</Text>
          <Svg
            viewBox="-0.5 -0.5 276.9995437982689 4.500909915843749"
            style={styles.path2}
          >
            <Path
              strokeWidth={2}
              fill="transparent"
              stroke="rgba(185,185,185,1)"
              d=""
            ></Path>
          </Svg>
        </View>
        <EntypoIcon name="check" style={styles.icon}></EntypoIcon>
      </View>
      <View style={styles.username}>
        <Text style={styles.username1}>Nome</Text>
        <Svg
          viewBox="-0.5 -0.5 276.9995437982689 4.500909915843749"
          style={styles.path3}
        >
          <Path
            strokeWidth={2}
            fill="transparent"
            stroke="rgba(185,185,185,1)"
            d=""
          ></Path>
        </Svg>
      </View>
      <View style={styles.welcome}>
        <Text style={styles.helloThere}>PerifYech</Text>
        <Text style={styles.pleaseSignInToCo}>Insira os dados cadastrais</Text>
      </View>
      <View style={styles.password2Stack}>
        <View style={styles.password2}>
          <Text style={styles.password12}>Telefone</Text>
          <Svg
            viewBox="-0.5 -0.5 276.9995437982689 4.500909915843749"
            style={styles.path22}
          >
            <Path
              strokeWidth={2}
              fill="transparent"
              stroke="rgba(185,185,185,1)"
              d=""
            ></Path>
          </Svg>
        </View>
        <EntypoIcon name="check" style={styles.icon1}></EntypoIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  button1: {
    top: 46,
    left: 12,
    width: 230,
    height: 52,
    backgroundColor: "rgba(124,107,215,1)",
    position: "absolute",
    shadowOffset: {
      height: -20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.12)",
    shadowOpacity: 1,
    shadowRadius: 40
  },
  signUpIfYoureN: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 17,
    marginLeft: 83
  },
  loginButton: {
    top: 12,
    left: 107,
    width: 60,
    height: 60,
    position: "absolute"
  },
  path: {
    top: 0,
    left: 0,
    width: 60,
    height: 60,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path1: {
    top: 23,
    left: 18,
    width: 24,
    height: 14,
    backgroundColor: "transparent",
    position: "absolute",
    transform: [
      {
        scaleX: -1
      }
    ],
    borderColor: "transparent"
  },
  pathStack: {
    width: 60,
    height: 60
  },
  password13: {
    top: 0,
    left: 0,
    width: 275,
    height: 42,
    position: "absolute"
  },
  password122: {
    backgroundColor: "transparent",
    color: "rgba(184,184,184,1)",
    fontSize: 18
  },
  path222: {
    width: 277,
    height: 5,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 20
  },
  button1Stack: {
    width: 275,
    height: 98,
    marginTop: 522,
    marginLeft: 51
  },
  password: {
    top: 12,
    left: 0,
    width: 275,
    height: 42,
    position: "absolute"
  },
  password1: {
    backgroundColor: "transparent",
    color: "rgba(184,184,184,1)",
    fontSize: 18
  },
  path2: {
    width: 277,
    height: 5,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 20
  },
  icon: {
    top: 0,
    left: 234,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 32
  },
  passwordStack: {
    width: 275,
    height: 54,
    marginTop: -226,
    marginLeft: 51
  },
  username: {
    width: 275,
    height: 42,
    marginTop: -96,
    marginLeft: 50
  },
  username1: {
    backgroundColor: "transparent",
    color: "rgba(184,184,184,1)",
    fontSize: 18
  },
  path3: {
    width: 277,
    height: 5,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 20
  },
  welcome: {
    width: 223,
    height: 77,
    marginTop: -219,
    marginLeft: 76
  },
  helloThere: {
    backgroundColor: "transparent",
    color: "rgba(124,107,215,1)",
    fontSize: 34,
    marginTop: 4,
    marginLeft: 44
  },
  pleaseSignInToCo: {
    backgroundColor: "transparent",
    color: "rgba(91,91,91,1)",
    fontSize: 18,
    marginTop: 11,
    marginLeft: 21
  },
  password2: {
    top: 11,
    left: 0,
    width: 275,
    height: 42,
    position: "absolute"
  },
  password12: {
    backgroundColor: "transparent",
    color: "rgba(184,184,184,1)",
    fontSize: 18
  },
  path22: {
    width: 277,
    height: 5,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 20
  },
  icon1: {
    top: 0,
    left: 234,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 32
  },
  password2Stack: {
    width: 275,
    height: 53,
    marginTop: 203,
    marginLeft: 51
  }
});

export default Untitled3;

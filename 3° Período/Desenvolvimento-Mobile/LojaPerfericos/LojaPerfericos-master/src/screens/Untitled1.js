import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function Untitled1(props) {
  return (
    <View style={styles.root}>
      <View style={styles.loginButtonStack}>
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
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Untitled")}
          style={styles.button1}
        >
          <Text style={styles.signUpIfYoureN1}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.forgotPass}>Esqueceu a senha?</Text>
      <View style={styles.password}>
        <Text style={styles.password1}>Senha</Text>
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
      <View style={styles.username}>
        <Text style={styles.username1}>Email</Text>
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
        <Text style={styles.helloThere}>PerifYech{"\n"} ADM</Text>
        <Text style={styles.pleaseSignInToCo}>Entre para continuar.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  loginButton: {
    top: 0,
    left: 102,
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
  button1: {
    top: 34,
    left: 0,
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
  signUpIfYoureN1: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 17,
    marginLeft: 83
  },
  loginButtonStack: {
    width: 230,
    height: 86,
    marginTop: 534,
    marginLeft: 56
  },
  forgotPass: {
    backgroundColor: "transparent",
    color: "rgba(159,159,159,1)",
    fontSize: 14,
    marginTop: -136,
    marginLeft: 241
  },
  password: {
    width: 275,
    height: 42,
    marginTop: -66,
    marginLeft: 50
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
  username: {
    width: 275,
    height: 42,
    marginTop: -122,
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
    color: "rgba(209,30,72,1)",
    fontSize: 34,
    marginTop: -17,
    alignSelf: "center"
  },
  pleaseSignInToCo: {
    backgroundColor: "transparent",
    color: "rgba(91,91,91,1)",
    fontSize: 18,
    marginTop: 8,
    alignSelf: "center"
  }
});

export default Untitled1;

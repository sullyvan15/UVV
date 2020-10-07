import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function Login1(props) {
  return (
    <View style={styles.root}>
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
        <Text style={styles.helloThere1}>PerifYech</Text>
        <Text style={styles.pleaseSignInToCo}>
          Por favor, {"\n"}entre para continuar.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  forgotPass: {
    backgroundColor: "transparent",
    color: "rgba(159,159,159,1)",
    fontSize: 14,
    marginTop: 484,
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
  helloThere1: {
    backgroundColor: "transparent",
    color: "rgba(124,107,215,1)",
    fontSize: 34,
    marginTop: 4,
    marginLeft: 30
  },
  pleaseSignInToCo: {
    backgroundColor: "transparent",
    color: "rgba(91,91,91,1)",
    fontSize: 18,
    marginTop: 15,
    alignSelf: "center"
  }
});

export default Login1;

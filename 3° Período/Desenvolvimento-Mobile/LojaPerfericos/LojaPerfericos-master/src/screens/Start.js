import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";

function Start(props) {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../assets/images/fd9452c22a50ddb329df6c58c2bedae2492a69b0.png")}
        resizeMode="cover"
        style={styles.vincentDelegge1598633Unsplash}
        imageStyle={styles.vincentDelegge1598633Unsplash_imageStyle}
      >
        <Text style={styles.listenAllDay}>PerifYech</Text>
        <Text style={styles.enjoyYourPlaylist}>
          Desfrute da sua plataforma de periféricos, porque o que é de melhor, é
          encontrado aqui.
        </Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
            style={styles.button}
          >
            <View style={styles.rectangle2}>
              <Text style={styles.login2}>Login</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.signUpButton}>
            <View style={styles.rectangle1}>
              <Text style={styles.signUp2}>Inscrever-se</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  vincentDelegge1598633Unsplash: {
    width: 541,
    height: 812,
    backgroundColor: "transparent",
    marginLeft: -112
  },
  vincentDelegge1598633Unsplash_imageStyle: {},
  listenAllDay: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    fontFamily: "roboto-700",
    marginTop: 571,
    marginLeft: 132
  },
  enjoyYourPlaylist: {
    width: 324,
    height: 76,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    opacity: 0.49,
    fontSize: 14,
    fontFamily: "roboto-300",
    lineHeight: 22,
    marginTop: 23,
    marginLeft: 136
  },
  button: {
    width: 139,
    height: 40
  },
  rectangle2: {
    width: 139,
    height: 40,
    backgroundColor: "rgba(124,107,215,1)",
    borderRadius: 3,
    borderColor: "rgba(124,107,215,1)",
    borderWidth: 1
  },
  login2: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
    marginTop: 12,
    marginLeft: 52
  },
  signUpButton: {
    width: 139,
    height: 40,
    marginLeft: 27
  },
  rectangle1: {
    width: 139,
    height: 40,
    backgroundColor: "transparent",
    borderRadius: 3,
    borderColor: "rgba(124,107,215,1)",
    borderWidth: 1
  },
  signUp2: {
    backgroundColor: "transparent",
    color: "rgba(124,107,215,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
    marginTop: 13,
    marginLeft: 30
  },
  buttonRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 132,
    marginRight: 104
  }
});

export default Start;

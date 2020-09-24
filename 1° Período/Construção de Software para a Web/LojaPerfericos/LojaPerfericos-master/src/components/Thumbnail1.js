import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Oval1 from "./Oval1";

function Thumbnail1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <Text style={styles.send}>Send</Text>
      <Oval1 style={styles.oval11}></Oval1>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  send: {
    backgroundColor: "transparent",
    color: "rgba(63,63,63,1)",
    opacity: 1,
    fontSize: 15,
    letterSpacing: 0.41,
    textAlign: "center",
    marginTop: 78,
    marginLeft: 11
  },
  oval11: {
    width: 61,
    height: 61,
    backgroundColor: "transparent",
    opacity: 1,
    marginTop: -93
  }
});

export default Thumbnail1;

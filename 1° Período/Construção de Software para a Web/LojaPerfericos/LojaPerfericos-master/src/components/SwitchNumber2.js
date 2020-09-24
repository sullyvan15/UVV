import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function SwitchNumber2(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.style3Stack}>
        <Text style={styles.style3}>02</Text>
        <View style={styles.rectangle3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  style3: {
    top: 4,
    left: 13,
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    position: "absolute",
    fontSize: 13
  },
  rectangle3: {
    top: 0,
    left: 0,
    width: 42,
    height: 26,
    backgroundColor: "transparent",
    position: "absolute",
    borderRadius: 13,
    borderColor: "rgba(174,184,192,1)",
    borderWidth: 1
  },
  style3Stack: {
    width: 42,
    height: 26
  }
});

export default SwitchNumber2;

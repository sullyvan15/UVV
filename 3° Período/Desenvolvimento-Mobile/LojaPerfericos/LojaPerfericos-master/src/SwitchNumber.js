import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function SwitchNumber(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.style11Stack}>
        <Text style={styles.style11}>02</Text>
        <View style={styles.rectangle33}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  style11: {
    top: 4,
    left: 13,
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    position: "absolute",
    fontSize: 13
  },
  rectangle33: {
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
  style11Stack: {
    width: 42,
    height: 26
  }
});

export default SwitchNumber;

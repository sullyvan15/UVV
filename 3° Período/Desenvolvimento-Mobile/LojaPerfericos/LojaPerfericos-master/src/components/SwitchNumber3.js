import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function SwitchNumber3(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.style4Stack}>
        <Text style={styles.style4}>12</Text>
        <View style={styles.rectangle3Copy}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  style4: {
    top: 4,
    left: 13,
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    position: "absolute",
    fontSize: 13
  },
  rectangle3Copy: {
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
  style4Stack: {
    width: 42,
    height: 26
  }
});

export default SwitchNumber3;

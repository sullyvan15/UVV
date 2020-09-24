import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function BarsStatusBarDarkTime1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <Text style={styles.time}>9:41</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  time: {
    height: 18,
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    letterSpacing: -0.33,
    textAlign: "center",
    marginTop: 6,
    marginRight: 2
  }
});

export default BarsStatusBarDarkTime1;

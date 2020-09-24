import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Logo1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.logo}>
        <Text style={styles.circle1}>.Circle</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  logo: {
    width: 73,
    height: 32
  },
  circle1: {
    backgroundColor: "transparent",
    color: "rgba(11,154,245,1)",
    fontSize: 23
  }
});

export default Logo1;

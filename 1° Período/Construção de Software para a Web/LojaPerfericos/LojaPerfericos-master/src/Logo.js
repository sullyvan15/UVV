import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Logo(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.circle}>.Circle</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rect: {
    width: 73,
    height: 32
  },
  circle: {
    backgroundColor: "transparent",
    color: "rgba(11,154,245,1)",
    fontSize: 23
  }
});

export default Logo;

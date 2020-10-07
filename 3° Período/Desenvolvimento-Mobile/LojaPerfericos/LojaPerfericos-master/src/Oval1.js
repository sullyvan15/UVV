import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import Dribbble1 from "./Dribbble1";

function Oval1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.pathStack}>
        <Svg viewBox="-0 -0 56 56" style={styles.path}>
          <Path
            strokeWidth={0}
            fill="rgba(253,60,114,1)"
            fillOpacity={0.1151878720238095}
            strokeOpacity={0.1151878720238095}
            d="M28.00 56.00 C43.46 56.00 56.00 43.46 56.00 28.00 C56.00 12.54 43.46 0.00 28.00 0.00 C12.54 0.00 0.00 12.54 0.00 28.00 C0.00 43.46 12.54 56.00 28.00 56.00 Z"
          ></Path>
        </Svg>
        <Dribbble1 style={styles.dribbble1}></Dribbble1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  path: {
    top: 0,
    left: 0,
    width: 56,
    height: 56,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  dribbble1: {
    top: 12,
    left: 12,
    width: 33,
    height: 33,
    backgroundColor: "transparent",
    position: "absolute",
    opacity: 1
  },
  pathStack: {
    width: 56,
    height: 56
  }
});

export default Oval1;

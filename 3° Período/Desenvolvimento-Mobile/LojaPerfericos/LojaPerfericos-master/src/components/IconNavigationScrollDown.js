import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconNavigationScrollDown(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.scrollDown}>
        <View style={styles.oval25Stack}>
          <Svg viewBox="-0 -0 50 50" style={styles.oval25}>
            <Path
              strokeWidth={0}
              fill="rgba(11,154,245,1)"
              d="M25.00 50.00 C38.81 50.00 50.00 38.81 50.00 25.00 C50.00 11.19 38.81 0.00 25.00 0.00 C11.19 0.00 0.00 11.19 0.00 25.00 C0.00 38.81 11.19 50.00 25.00 50.00 Z"
            ></Path>
          </Svg>
          <Svg viewBox="-0 -0 9 16" style={styles.shapeCopy}>
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              d="M0.32 15.70 C0.51 15.89 0.77 16.00 1.04 16.00 C1.31 16.00 1.57 15.89 1.76 15.70 L8.70 8.73 C8.89 8.54 9.00 8.28 9.00 8.01 C9.00 7.74 8.89 7.48 8.70 7.28 L1.76 0.32 C1.50 0.05 1.12 -0.06 0.76 0.03 C0.41 0.13 0.13 0.41 0.03 0.77 C-0.06 1.13 0.05 1.51 0.32 1.77 L6.54 8.01 L0.32 14.25 C0.13 14.44 0.02 14.70 0.02 14.97 C0.02 15.25 0.12 15.51 0.32 15.70 Z"
            ></Path>
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  scrollDown: {
    width: 50,
    height: 50
  },
  oval25: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  shapeCopy: {
    top: 20,
    left: 21,
    width: 9,
    height: 16,
    backgroundColor: "transparent",
    position: "absolute",
    transform: [
      {
        rotate: "-270deg"
      }
    ],
    borderColor: "transparent"
  },
  oval25Stack: {
    width: 50,
    height: 50
  }
});

export default IconNavigationScrollDown;

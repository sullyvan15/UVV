import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconNavigationTips1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.tips}>
        <View style={styles.oval20CopyStack}>
          <Svg
            viewBox="-0 -0 15.24600040125847 15.24600040125847"
            style={styles.oval20Copy}
          >
            <Path
              strokeWidth={0}
              fill="rgba(174,184,192,1)"
              d="M7.62 15.25 C11.83 15.25 15.25 11.83 15.25 7.62 C15.25 3.41 11.83 0.00 7.62 0.00 C3.41 0.00 0.00 3.41 0.00 7.62 C0.00 11.83 3.41 15.25 7.62 15.25 Z"
            ></Path>
          </Svg>
          <Text style={styles.style1}>?</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  tips: {
    width: 16,
    height: 17
  },
  oval20Copy: {
    top: 1,
    left: 0,
    width: 15,
    height: 15,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  style1: {
    top: 0,
    left: 5,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 13
  },
  oval20CopyStack: {
    width: 15,
    height: 16
  }
});

export default IconNavigationTips1;

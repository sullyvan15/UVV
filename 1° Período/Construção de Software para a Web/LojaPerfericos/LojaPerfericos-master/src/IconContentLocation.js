import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconContentLocation(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.pinView}>
        <View style={styles.oval2CopyStack}>
          <Svg viewBox="-1 -1 18 22" style={styles.oval2Copy}>
            <Path
              strokeWidth={2}
              fill="transparent"
              stroke="rgba(174,184,192,1)"
              d="M8.00 19.00 C11.87 19.00 15.00 12.26 15.00 8.26 C15.00 4.25 11.87 1.00 8.00 1.00 C4.13 1.00 1.00 4.25 1.00 8.26 C1.00 12.26 4.13 19.00 8.00 19.00 Z"
            ></Path>
          </Svg>
          <Svg viewBox="-1 -1 10 10" style={styles.oval3}>
            <Path
              strokeWidth={2}
              fill="transparent"
              stroke="rgba(174,184,192,1)"
              d="M4.00 7.00 C5.66 7.00 7.00 5.66 7.00 4.00 C7.00 2.34 5.66 1.00 4.00 1.00 C2.34 1.00 1.00 2.34 1.00 4.00 C1.00 5.66 2.34 7.00 4.00 7.00 Z"
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
  pinView: {
    width: 14,
    height: 18
  },
  oval2Copy: {
    top: 0,
    left: 0,
    width: 18,
    height: 22,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  oval3: {
    top: 4,
    left: 4,
    width: 10,
    height: 10,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  oval2CopyStack: {
    width: 18,
    height: 22,
    marginTop: -1,
    marginLeft: -1
  }
});

export default IconContentLocation;

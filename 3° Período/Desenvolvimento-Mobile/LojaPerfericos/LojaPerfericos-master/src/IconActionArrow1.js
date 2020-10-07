import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconActionArrow1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <Svg viewBox="-0 -0 17 9" style={styles.path}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M16.83 0.17 C16.59 -0.06 16.21 -0.06 15.98 0.17 L8.51 7.58 L1.03 0.17 C0.79 -0.06 0.41 -0.06 0.18 0.17 C-0.06 0.41 -0.06 0.78 0.18 1.01 L8.07 8.83 C8.19 8.94 8.33 9.00 8.49 9.00 C8.64 9.00 8.80 8.94 8.92 8.83 L16.81 1.01 C17.06 0.78 17.06 0.41 16.83 0.17 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  path: {
    width: 17,
    height: 9,
    backgroundColor: "transparent",
    transform: [
      {
        rotate: "90deg"
      }
    ],
    borderColor: "transparent",
    marginTop: 8,
    marginLeft: 4
  }
});

export default IconActionArrow1;

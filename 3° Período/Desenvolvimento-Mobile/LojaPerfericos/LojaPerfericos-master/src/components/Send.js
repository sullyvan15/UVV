import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Send(props) {
  return (
    <View style={[styles.root, props.style]}>
      <Svg
        viewBox="-0 -0 15.18498560577708 15.5825"
        style={styles.iconNavigationArrowUp24Px}
      >
        <Path
          strokeWidth={0}
          fill="rgba(96,141,226,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.59 14.58 L6.59 3.41 L1.71 8.29 C1.32 8.68 0.68 8.68 0.29 8.29 C-0.10 7.90 -0.10 7.27 0.29 6.88 L6.88 0.29 C7.27 -0.10 7.90 -0.10 8.29 0.29 L14.89 6.87 C15.08 7.06 15.19 7.31 15.19 7.58 C15.19 7.84 15.08 8.10 14.89 8.28 C14.50 8.67 13.87 8.67 13.48 8.28 L8.59 3.41 L8.59 14.58 C8.59 15.13 8.14 15.58 7.59 15.58 C7.04 15.58 6.59 15.13 6.59 14.58 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  iconNavigationArrowUp24Px: {
    width: 15,
    height: 16,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 4,
    marginLeft: 4
  }
});

export default Send;

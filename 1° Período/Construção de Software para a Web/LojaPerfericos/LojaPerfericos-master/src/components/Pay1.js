import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Pay1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <Svg
        viewBox="-0.15 -0.15 8.483023 16.47225886004087"
        style={styles.path7}
      >
        <Path
          strokeWidth={0.6}
          fill="rgba(115,115,255,1)"
          stroke="rgba(120,110,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M4.74 7.19 L3.14 7.19 C2.23 7.19 1.49 6.45 1.49 5.54 C1.49 4.63 2.23 3.89 3.14 3.89 L6.34 3.89 C6.75 3.89 7.08 3.55 7.08 3.14 C7.08 2.73 6.75 2.40 6.34 2.40 L4.69 2.40 L4.69 0.75 C4.69 0.33 4.35 0.00 3.94 0.00 C3.53 0.00 3.20 0.33 3.20 0.75 L3.20 2.40 L3.14 2.40 C1.41 2.40 0.00 3.81 0.00 5.54 C0.00 7.27 1.41 8.68 3.14 8.68 L4.74 8.68 C5.65 8.68 6.39 9.42 6.39 10.33 C6.39 11.24 5.65 11.98 4.74 11.98 L1.54 11.98 C1.13 11.98 0.80 12.32 0.80 12.73 C0.80 13.14 1.13 13.48 1.54 13.48 L3.20 13.48 L3.20 15.13 C3.20 15.54 3.53 15.87 3.94 15.87 C4.35 15.87 4.69 15.54 4.69 15.13 L4.69 13.48 L4.74 13.48 C6.47 13.48 7.88 12.07 7.88 10.33 C7.88 8.60 6.47 7.19 4.74 7.19 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  path7: {
    width: 8,
    height: 16,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 4,
    marginLeft: 8
  }
});

export default Pay1;

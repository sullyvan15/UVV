import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function BarsStatusBarDarkWifiFull1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.wifiPathFiller}></View>
      <Svg viewBox="-0 -0 15.33333333333333 11" style={styles.wifiPath}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          d="M7.67 2.24 C7.67 2.24 3.30 3.08 1.69 4.58 C1.57 4.70 1.25 4.58 1.25 4.58 L0.09 3.43 C0.09 3.43 -0.00 3.29 0.00 3.20 C0.00 3.12 0.04 3.04 0.10 2.98 C4.33 -0.99 11.00 -0.99 15.24 2.98 C15.30 3.04 15.33 3.12 15.33 3.20 C15.33 3.29 15.24 3.43 15.24 3.43 L14.08 4.58 C14.08 4.58 13.77 4.70 13.64 4.58 C12.03 3.08 7.67 2.24 7.67 2.24 Z M7.67 5.97 C7.67 5.97 5.26 6.42 4.36 7.25 C4.23 7.36 3.92 7.24 3.92 7.24 L2.76 6.06 C2.76 6.06 2.67 5.92 2.67 5.83 C2.67 5.74 2.70 5.66 2.77 5.60 C5.53 3.02 9.81 3.02 12.57 5.60 C12.63 5.66 12.67 5.74 12.67 5.83 C12.67 5.92 12.57 6.06 12.57 6.06 L11.41 7.24 C11.41 7.24 11.10 7.36 10.98 7.25 C10.07 6.42 7.67 5.97 7.67 5.97 Z M7.89 10.91 C7.89 10.91 7.75 11.00 7.67 11.00 C7.58 11.00 7.44 10.91 7.44 10.91 L5.43 8.92 C5.43 8.92 5.33 8.78 5.33 8.69 C5.34 8.60 5.37 8.52 5.44 8.47 C6.72 7.40 8.61 7.40 9.90 8.47 C9.96 8.52 10.00 8.60 10.00 8.69 C10.00 8.78 9.91 8.92 9.91 8.92 L7.89 10.91 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row"
  },
  wifiPathFiller: {
    flex: 1,
    flexDirection: "row"
  },
  wifiPath: {
    width: 15,
    height: 11,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginRight: 3,
    marginTop: 1
  }
});

export default BarsStatusBarDarkWifiFull1;

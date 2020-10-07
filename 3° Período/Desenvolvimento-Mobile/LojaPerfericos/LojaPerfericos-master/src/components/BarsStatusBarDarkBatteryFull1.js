import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function BarsStatusBarDarkBatteryFull1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.borderRow}>
        <View style={styles.border}>
          <View style={styles.capacity}></View>
        </View>
        <Svg viewBox="-0 -0 1.333333333333333 4" style={styles.cap}>
          <Path
            strokeWidth={0}
            fill="rgba(0,0,0,1)"
            fillOpacity={0.4}
            strokeOpacity={0.4}
            d="M0.00 0.00 L0.00 4.00 C0.81 3.66 1.33 2.87 1.33 2.00 C1.33 1.13 0.81 0.34 0.00 0.00 "
          ></Path>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row"
  },
  border: {
    width: 22,
    height: 11,
    backgroundColor: "transparent",
    borderRadius: 2.67,
    borderColor: "rgba(0,0,0,0.35)",
    borderWidth: 1
  },
  capacity: {
    width: 18,
    height: 7,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 1.33,
    marginTop: 2,
    marginLeft: 2
  },
  cap: {
    width: 1,
    height: 4,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 1,
    marginTop: 4
  },
  borderRow: {
    height: 11,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  }
});

export default BarsStatusBarDarkBatteryFull1;

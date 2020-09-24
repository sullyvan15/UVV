import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import BarsStatusBarDarkWifiFull from "./BarsStatusBarDarkWifiFull";
import BarsStatusBarDarkBatteryFull from "./BarsStatusBarDarkBatteryFull";
import BarsStatusBarDarkCellularConnectionFull from "./BarsStatusBarDarkCellularConnectionFull";

function BarsStatusBarDarkConnections(props) {
  return (
    <View style={[styles.root, props.style]}>
      <BarsStatusBarDarkWifiFull
        style={styles.barsStatusBarDarkWifiFull}
      ></BarsStatusBarDarkWifiFull>
      <View style={styles.barsStatusBarDarkWifiFullFiller}></View>
      <View style={styles.barsStatusBarDarkBatteryFullRow}>
        <BarsStatusBarDarkBatteryFull
          style={styles.barsStatusBarDarkBatteryFull}
        ></BarsStatusBarDarkBatteryFull>
        <BarsStatusBarDarkCellularConnectionFull
          style={styles.barsStatusBarDarkCellularConnectionFull}
        ></BarsStatusBarDarkCellularConnectionFull>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row"
  },
  barsStatusBarDarkWifiFull: {
    width: 21,
    height: 15,
    backgroundColor: "transparent",
    marginLeft: 20,
    marginTop: 1
  },
  barsStatusBarDarkWifiFullFiller: {
    flex: 1,
    flexDirection: "row"
  },
  barsStatusBarDarkBatteryFull: {
    width: 25,
    height: 12,
    backgroundColor: "transparent",
    marginRight: -68
  },
  barsStatusBarDarkCellularConnectionFull: {
    width: 18,
    height: 12,
    backgroundColor: "transparent",
    marginRight: 50
  },
  barsStatusBarDarkBatteryFullRow: {
    height: 12,
    flexDirection: "row",
    marginTop: 2
  }
});

export default BarsStatusBarDarkConnections;

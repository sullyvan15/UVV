import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import BarsStatusBarDarkWifiFull1 from "./BarsStatusBarDarkWifiFull1";
import BarsStatusBarDarkBatteryFull1 from "./BarsStatusBarDarkBatteryFull1";
import BarsStatusBarDarkCellularConnectionFull1 from "./BarsStatusBarDarkCellularConnectionFull1";

function BarsStatusBarDarkConnections1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <BarsStatusBarDarkWifiFull1
        style={styles.barsStatusBarDarkWifiFull1}
      ></BarsStatusBarDarkWifiFull1>
      <View style={styles.barsStatusBarDarkWifiFull1Filler}></View>
      <View style={styles.barsStatusBarDarkBatteryFull1Row}>
        <BarsStatusBarDarkBatteryFull1
          style={styles.barsStatusBarDarkBatteryFull1}
        ></BarsStatusBarDarkBatteryFull1>
        <BarsStatusBarDarkCellularConnectionFull1
          style={styles.barsStatusBarDarkCellularConnectionFull1}
        ></BarsStatusBarDarkCellularConnectionFull1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row"
  },
  barsStatusBarDarkWifiFull1: {
    width: 21,
    height: 15,
    backgroundColor: "transparent",
    marginLeft: 20,
    marginTop: 1
  },
  barsStatusBarDarkWifiFull1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  barsStatusBarDarkBatteryFull1: {
    width: 25,
    height: 12,
    backgroundColor: "transparent",
    marginRight: -68
  },
  barsStatusBarDarkCellularConnectionFull1: {
    width: 18,
    height: 12,
    backgroundColor: "transparent",
    marginRight: 50
  },
  barsStatusBarDarkBatteryFull1Row: {
    height: 12,
    flexDirection: "row",
    marginTop: 2
  }
});

export default BarsStatusBarDarkConnections1;

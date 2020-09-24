import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import BarsStatusBarDarkWifiFull2 from "./BarsStatusBarDarkWifiFull2";
import BarsStatusBarDarkBatteryFull2 from "./BarsStatusBarDarkBatteryFull2";
import BarsStatusBarDarkCellularConnectionFull2 from "./BarsStatusBarDarkCellularConnectionFull2";

function BarsStatusBarDarkConnections2(props) {
  return (
    <View style={[styles.root, props.style]}>
      <BarsStatusBarDarkWifiFull2
        style={styles.barsStatusBarDarkWifiFull2}
      ></BarsStatusBarDarkWifiFull2>
      <View style={styles.barsStatusBarDarkWifiFull2Filler}></View>
      <View style={styles.barsStatusBarDarkBatteryFull2Row}>
        <BarsStatusBarDarkBatteryFull2
          style={styles.barsStatusBarDarkBatteryFull2}
        ></BarsStatusBarDarkBatteryFull2>
        <BarsStatusBarDarkCellularConnectionFull2
          style={styles.barsStatusBarDarkCellularConnectionFull2}
        ></BarsStatusBarDarkCellularConnectionFull2>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row"
  },
  barsStatusBarDarkWifiFull2: {
    width: 21,
    height: 15,
    backgroundColor: "transparent",
    marginLeft: 20,
    marginTop: 1
  },
  barsStatusBarDarkWifiFull2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  barsStatusBarDarkBatteryFull2: {
    width: 25,
    height: 12,
    backgroundColor: "transparent",
    marginRight: -68
  },
  barsStatusBarDarkCellularConnectionFull2: {
    width: 18,
    height: 12,
    backgroundColor: "transparent",
    marginRight: 50
  },
  barsStatusBarDarkBatteryFull2Row: {
    height: 12,
    flexDirection: "row",
    marginTop: 2
  }
});

export default BarsStatusBarDarkConnections2;

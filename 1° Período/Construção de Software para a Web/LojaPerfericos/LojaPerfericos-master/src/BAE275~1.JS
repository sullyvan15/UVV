import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function BarsStatusBarDarkCellularConnectionFull2(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.cellularConnectionPathFiller}></View>
      <Svg
        viewBox="-0 -0 17 10.66666666666667"
        style={styles.cellularConnectionPath}
      >
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          d="M1.00 6.67 L0.00 7.67 L0.00 9.67 L1.00 10.67 L2.00 10.67 L3.00 9.67 L3.00 7.67 L2.00 6.67 Z M4.67 5.67 L4.67 9.67 L5.67 10.67 L6.67 10.67 L7.67 9.67 L7.67 5.67 L6.67 4.67 L5.67 4.67 L4.67 5.67 Z M9.33 3.33 L9.33 9.67 L10.33 10.67 L11.33 10.67 L12.33 9.67 L12.33 3.33 L11.33 2.33 L10.33 2.33 L9.33 3.33 Z M15.00 0.00 L14.00 1.00 L14.00 9.67 L15.00 10.67 L16.00 10.67 L17.00 9.67 L17.00 1.00 L16.00 0.00 Z"
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
  cellularConnectionPathFiller: {
    flex: 1,
    flexDirection: "row"
  },
  cellularConnectionPath: {
    width: 17,
    height: 11,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1
  }
});

export default BarsStatusBarDarkCellularConnectionFull2;

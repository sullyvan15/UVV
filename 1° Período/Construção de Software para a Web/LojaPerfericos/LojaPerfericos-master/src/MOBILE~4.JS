import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import GridXYAxis1Week1 from "./GridXYAxis1Week1";
import MobileMobileChartsAreaChartsBasicColumnChart1 from "./MobileMobileChartsAreaChartsBasicColumnChart1";

function MobileMobileChartsWithGridColumnChartsBasicColumnChart1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.chart}>
        <View style={styles.gridXyAxis1Week1Stack}>
          <GridXYAxis1Week1 style={styles.gridXyAxis1Week1}></GridXYAxis1Week1>
          <MobileMobileChartsAreaChartsBasicColumnChart1
            style={styles.mobileMobileChartsAreaChartsBasicColumnChart1}
          ></MobileMobileChartsAreaChartsBasicColumnChart1>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  chart: {
    opacity: 1,
    flex: 1,
    marginBottom: 48,
    marginTop: 28,
    marginLeft: 36,
    marginRight: 32
  },
  gridXyAxis1Week1: {
    top: 0,
    left: 0,
    width: 295,
    height: 206,
    backgroundColor: "transparent",
    position: "absolute",
    opacity: 1
  },
  mobileMobileChartsAreaChartsBasicColumnChart1: {
    top: 0,
    left: 0,
    width: 295,
    height: 206,
    backgroundColor: "transparent",
    position: "absolute",
    opacity: 1
  },
  gridXyAxis1Week1Stack: {
    width: 295,
    height: 206
  }
});

export default MobileMobileChartsWithGridColumnChartsBasicColumnChart1;

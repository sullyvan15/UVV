import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import GridXYAxis1Week from "./GridXYAxis1Week";
import MobileMobileChartsAreaChartsBasicColumnChart from "./MobileMobileChartsAreaChartsBasicColumnChart";

function MobileMobileChartsWithGridColumnChartsBasicColumnChart(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.chart}>
        <View style={styles.gridXyAxis1WeekStack}>
          <GridXYAxis1Week style={styles.gridXyAxis1Week}></GridXYAxis1Week>
          <MobileMobileChartsAreaChartsBasicColumnChart
            style={styles.mobileMobileChartsAreaChartsBasicColumnChart}
          ></MobileMobileChartsAreaChartsBasicColumnChart>
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
  gridXyAxis1Week: {
    top: 0,
    left: 0,
    width: 295,
    height: 206,
    backgroundColor: "transparent",
    position: "absolute",
    opacity: 1
  },
  mobileMobileChartsAreaChartsBasicColumnChart: {
    top: 0,
    left: 0,
    width: 295,
    height: 206,
    backgroundColor: "transparent",
    position: "absolute",
    opacity: 1
  },
  gridXyAxis1WeekStack: {
    width: 295,
    height: 206
  }
});

export default MobileMobileChartsWithGridColumnChartsBasicColumnChart;

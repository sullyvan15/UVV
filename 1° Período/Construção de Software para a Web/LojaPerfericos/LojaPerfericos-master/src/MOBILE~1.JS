import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function MobileMobileChartsAreaChartsBasicColumnChart(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.bg}>
        <View style={styles.shape}>
          <View style={styles.rectangle14Row}>
            <View style={styles.rectangle14}></View>
            <View style={styles.rectangle13}></View>
            <View style={styles.rectangle12}></View>
            <View style={styles.rectangle11}></View>
            <View style={styles.rectangle10}></View>
            <View style={styles.rectangle9}></View>
            <View style={styles.rectangle8}></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  bg: {
    width: 295,
    height: 206,
    backgroundColor: "rgba(255,255,255,0)"
  },
  shape: {
    opacity: 1,
    flexDirection: "row",
    flex: 1,
    marginTop: 38,
    marginLeft: 17,
    marginRight: 16
  },
  rectangle14: {
    width: 10,
    height: 168,
    backgroundColor: "rgba(156,166,181,1)",
    opacity: 1,
    borderRadius: 5
  },
  rectangle13: {
    width: 10,
    height: 55,
    backgroundColor: "rgba(156,166,181,1)",
    opacity: 1,
    borderRadius: 5,
    marginLeft: 32,
    marginTop: 113
  },
  rectangle12: {
    width: 10,
    height: 115,
    backgroundColor: "rgba(156,166,181,1)",
    opacity: 1,
    borderRadius: 5,
    marginLeft: 32,
    marginTop: 53
  },
  rectangle11: {
    width: 10,
    height: 128,
    backgroundColor: "rgba(156,166,181,1)",
    opacity: 1,
    borderRadius: 5,
    marginLeft: 32,
    marginTop: 40
  },
  rectangle10: {
    width: 10,
    height: 76,
    backgroundColor: "rgba(156,166,181,1)",
    opacity: 1,
    borderRadius: 5,
    marginLeft: 32,
    marginTop: 92
  },
  rectangle9: {
    width: 10,
    height: 55,
    backgroundColor: "rgba(156,166,181,1)",
    opacity: 1,
    borderRadius: 5,
    marginLeft: 32,
    marginTop: 113
  },
  rectangle8: {
    width: 10,
    height: 34,
    backgroundColor: "rgba(156,166,181,1)",
    opacity: 1,
    borderRadius: 5,
    marginLeft: 32,
    marginTop: 134
  },
  rectangle14Row: {
    height: 168,
    flexDirection: "row",
    flex: 1
  }
});

export default MobileMobileChartsAreaChartsBasicColumnChart;

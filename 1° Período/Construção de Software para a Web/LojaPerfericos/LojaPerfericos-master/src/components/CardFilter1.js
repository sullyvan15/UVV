import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import SwitchNumber2 from "./SwitchNumber2";
import SwitchNumber3 from "./SwitchNumber3";

function CardFilter1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.filter}>
        <Text style={styles.filter1}>Filter</Text>
        <Text style={styles.rangeNotification}>Range Notification</Text>
        <View style={styles.minimumRow}>
          <Text style={styles.minimum}>Minimum</Text>
          <SwitchNumber2 style={styles.switchNumber2}></SwitchNumber2>
          <Text style={styles.maximum}>Maximum</Text>
          <SwitchNumber3 style={styles.switchNumber3}></SwitchNumber3>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  filter: {
    width: 249,
    height: 95
  },
  filter1: {
    width: 163,
    height: 20,
    backgroundColor: "transparent",
    color: "rgba(88,80,79,1)",
    fontSize: 15
  },
  rangeNotification: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginTop: 20
  },
  minimum: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginTop: 3
  },
  switchNumber2: {
    width: 42,
    height: 26,
    backgroundColor: "transparent",
    marginLeft: 16
  },
  maximum: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginLeft: 20,
    marginTop: 3
  },
  switchNumber3: {
    width: 42,
    height: 26,
    backgroundColor: "transparent",
    marginLeft: 17
  },
  minimumRow: {
    height: 26,
    flexDirection: "row",
    marginTop: 16
  }
});

export default CardFilter1;

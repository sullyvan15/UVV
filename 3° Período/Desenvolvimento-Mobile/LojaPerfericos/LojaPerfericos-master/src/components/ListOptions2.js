import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Oval1 from "./Oval1";

function ListOptions2(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.rectangle1}>
        <View style={styles.oval1Row}>
          <Oval1 style={styles.oval1}></Oval1>
          <View style={styles.dribbleIncColumn}>
            <Text style={styles.dribbleInc}>Dribble Inc.</Text>
            <Text style={styles.payment}>Payment</Text>
          </View>
          <Text style={styles.style6}>$45</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rectangle1: {
    width: 375,
    height: 96,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 8,
    shadowOffset: {
      height: 4,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.0396361451048951)",
    shadowOpacity: 1,
    shadowRadius: 21
  },
  oval1: {
    width: 56,
    height: 56,
    backgroundColor: "transparent",
    opacity: 1
  },
  dribbleInc: {
    backgroundColor: "transparent",
    color: "rgba(66,66,66,1)",
    opacity: 1,
    fontSize: 17
  },
  payment: {
    width: 183,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(66,66,66,1)",
    opacity: 0.8,
    fontSize: 13,
    marginTop: 10
  },
  dribbleIncColumn: {
    width: 183,
    marginLeft: 19,
    marginTop: 4,
    marginBottom: 9
  },
  style6: {
    backgroundColor: "transparent",
    color: "rgba(69,194,50,1)",
    opacity: 1,
    fontSize: 20,
    textAlign: "right",
    marginLeft: 29,
    marginTop: 16
  },
  oval1Row: {
    height: 56,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 22,
    marginRight: 34
  }
});

export default ListOptions2;

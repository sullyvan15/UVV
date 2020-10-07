import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ElementsGridElementsLinesHorizontal1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.row}>
        <View style={styles.container}></View>
        <View style={styles.containerFiller}></View>
        <Text style={styles.number}>0%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  row: {
    width: 134,
    height: 460,
    opacity: 1
  },
  container: {
    width: 134,
    height: 423,
    backgroundColor: "transparent",
    opacity: 1
  },
  containerFiller: {
    flex: 1
  },
  number: {
    backgroundColor: "transparent",
    color: "rgba(63,63,63,1)",
    opacity: 1,
    fontSize: 10,
    lineHeight: 20,
    marginRight: 14
  }
});

export default ElementsGridElementsLinesHorizontal1;

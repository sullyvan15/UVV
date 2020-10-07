import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function ElementsGridElementsLinesHorizontal2(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.rectangle8}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rectangle8: {
    backgroundColor: "rgba(216,216,216,1)",
    borderColor: "rgba(151,151,151,1)",
    borderWidth: 1,
    marginLeft: 36,
    height: 0,
    width: 0,
    opacity: 0
  }
});

export default ElementsGridElementsLinesHorizontal2;

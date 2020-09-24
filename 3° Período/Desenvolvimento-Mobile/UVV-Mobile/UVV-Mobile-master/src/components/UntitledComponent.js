import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCard3 from "./MaterialCard3";

function UntitledComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialCard3 style={styles.materialCard32Mm}></MaterialCard3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialCard32Mm: {
    width: 375,
    height: 256
  }
});

export default UntitledComponent;

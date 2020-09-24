import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function UntitledComponent1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="settings" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon: {
    color: "rgba(124,107,215,1)",
    fontSize: 26
  }
});

export default UntitledComponent1;

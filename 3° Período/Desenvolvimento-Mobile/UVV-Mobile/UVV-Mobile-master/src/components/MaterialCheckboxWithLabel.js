import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={
          props.checked
            ? "checkbox-marked"
            : props.icon1Name || "checkbox-blank-outline"
        }
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.checkLabel}>{props.label || "Label"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  checkIcon: {
    color: "#3F51B5",
    fontFamily: "Roboto",
    fontSize: 28,
    lineHeight: 28
  },
  checkLabel: {
    color: "rgba(0,0,0,0.87)",
    marginLeft: 2,
    fontSize: 16
  }
});

export default MaterialCheckboxWithLabel;

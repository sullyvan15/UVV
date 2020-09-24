import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
      <TextInput
        placeholder={props.textInput3 || ""}
        selectTextOnFocus={true}
        style={styles.textInput}
      ></TextInput>
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
  textInput: {
    width: 37,
    height: 16,
    color: "rgba(0,0,0,0.87)",
    marginLeft: 2,
    fontSize: 16
  }
});

export default MaterialCheckboxWithLabel1;

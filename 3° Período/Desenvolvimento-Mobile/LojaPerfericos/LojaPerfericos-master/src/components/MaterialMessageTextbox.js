import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

function MaterialMessageTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Input"
        style={[
          styles.inputStyle,
          {
            borderBottomColor: props.error
              ? "red"
              : props.success
              ? "green"
              : "#D9D5DC"
          }
        ]}
      ></TextInput>
      {props.error ? (
        <Text
          style={[
            styles.helper1,
            {
              color: props.error ? "red" : "transparent"
            }
          ]}
        >
          Error message
        </Text>
      ) : null}
      {props.success ? (
        <Text
          style={[
            styles.helper2,
            {
              color: props.success ? "green" : "transparent"
            }
          ]}
        >
          Success message
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  inputStyle: {
    width: 375,
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  helper1: {
    paddingTop: 8,
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  helper2: {
    paddingTop: 8,
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left"
  }
});

export default MaterialMessageTextbox;

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function InputTextActive(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group2}>
        <View style={styles.group}>
          <View style={styles.rectangle}>
            <View style={styles.group3}>
              <Text style={styles.searchAnything}>Search Anything</Text>
            </View>
          </View>
        </View>
        <Text style={styles.phoneNumber}>Phone Number</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group2: {
    height: 0,
    width: 0,
    opacity: 1
  },
  group: {
    height: 0,
    width: 0,
    opacity: 1,
    marginTop: 29
  },
  rectangle: {
    height: 0,
    width: 0,
    borderRadius: 4,
    backgroundColor: "rgba(244,244,244,1)"
  },
  group3: {
    height: 24,
    width: 170,
    opacity: 1,
    marginTop: 10,
    marginLeft: 8
  },
  searchAnything: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(144,144,144,1)",
    fontSize: 15,
    letterSpacing: 0.85
  },
  phoneNumber: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(48,48,48,1)",
    fontSize: 15,
    letterSpacing: 0.85,
    marginTop: -29
  }
});

export default InputTextActive;

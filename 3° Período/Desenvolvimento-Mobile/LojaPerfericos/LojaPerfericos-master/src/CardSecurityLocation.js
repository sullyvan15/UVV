import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconContentLocation from "./IconContentLocation";
import ToggleDisabled1 from "./ToggleDisabled1";

function CardSecurityLocation(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.securityLocation}>
        <View style={styles.rectangle47Copy2}>
          <Text style={styles.securityAndLocatio}>Security and Location</Text>
          <View style={styles.iconContentLocationRow}>
            <IconContentLocation
              style={styles.iconContentLocation}
            ></IconContentLocation>
            <Text style={styles.londonUnitedKingd}>London, United Kingdom</Text>
          </View>
          <View style={styles.automaticLocationRow}>
            <Text style={styles.automaticLocation}>Automatic Location</Text>
            <ToggleDisabled1 style={styles.toggleDisabled1}></ToggleDisabled1>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  securityLocation: {
    width: 375,
    height: 159
  },
  rectangle47Copy2: {
    width: 375,
    height: 159,
    backgroundColor: "rgba(255,255,255,1)"
  },
  securityAndLocatio: {
    backgroundColor: "transparent",
    color: "rgba(88,80,79,1)",
    fontSize: 15,
    marginTop: 30,
    marginLeft: 20
  },
  iconContentLocation: {
    width: 14,
    height: 18,
    backgroundColor: "transparent"
  },
  londonUnitedKingd: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginLeft: 10,
    marginTop: 5
  },
  iconContentLocationRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 20,
    marginRight: 187
  },
  automaticLocation: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginTop: 2
  },
  toggleDisabled1: {
    width: 45,
    height: 21,
    backgroundColor: "transparent",
    marginLeft: 178
  },
  automaticLocationRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  }
});

export default CardSecurityLocation;

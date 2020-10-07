import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconActionArrow1 from "./IconActionArrow1";

function TitleMain1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.group}>
        <View style={styles.iconActionArrow1Row}>
          <IconActionArrow1 style={styles.iconActionArrow1}></IconActionArrow1>
          <Text style={styles.profile}>Profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  group: {
    width: 130,
    height: 29,
    opacity: 1,
    flexDirection: "row",
    marginTop: -3
  },
  iconActionArrow1: {
    width: 24,
    height: 24,
    backgroundColor: "transparent",
    opacity: 1,
    marginTop: 4
  },
  profile: {
    backgroundColor: "transparent",
    color: "rgba(71,71,71,1)",
    opacity: 1,
    fontSize: 24,
    marginLeft: 28
  },
  iconActionArrow1Row: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 10
  }
});

export default TitleMain1;

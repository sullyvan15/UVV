import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconActionArrow from "./IconActionArrow";

function TitleMain(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.group}>
        <View style={styles.iconActionArrowRow}>
          <IconActionArrow style={styles.iconActionArrow}></IconActionArrow>
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
  iconActionArrow: {
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
  iconActionArrowRow: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 10
  }
});

export default TitleMain;

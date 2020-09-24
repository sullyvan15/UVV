import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconNavigationTips from "./IconNavigationTips";

function CardInformationAccount(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.informationAccount}>
        <View style={styles.rectangle47}>
          <Text style={styles.informationAccount1}>Information Account</Text>
          <View style={styles.claudioParisiUiRow}>
            <Text style={styles.claudioParisiUi}>
              Claudio. Parisi - UI Designer
            </Text>
            <IconNavigationTips
              style={styles.iconNavigationTips}
            ></IconNavigationTips>
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
  informationAccount: {
    width: 375,
    height: 118
  },
  rectangle47: {
    width: 375,
    height: 118,
    backgroundColor: "rgba(255,255,255,1)"
  },
  informationAccount1: {
    backgroundColor: "transparent",
    color: "rgba(88,80,79,1)",
    fontSize: 15,
    marginTop: 30,
    marginLeft: 20
  },
  claudioParisiUi: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginTop: 1
  },
  iconNavigationTips: {
    width: 19,
    height: 20,
    backgroundColor: "transparent",
    marginLeft: 157
  },
  claudioParisiUiRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 20,
    marginRight: 20
  }
});

export default CardInformationAccount;

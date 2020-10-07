import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ToggleDisabled3 from "./ToggleDisabled3";

function CardSecurityLocation1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.securityLocation}>
        <View style={styles.rectangle47Copy2}>
          <Text style={styles.securityAndLocatio}>Aplicativo</Text>
          <Text style={styles.londonUnitedKingd}>Termos e segurança</Text>
          <View style={styles.automaticLocationRow}>
            <Text style={styles.automaticLocation}>Dark mode</Text>
            <ToggleDisabled3 style={styles.toggleDisabled3}></ToggleDisabled3>
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
    height: 159,
    backgroundColor: "rgba(255,255,255,1)"
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
  londonUnitedKingd: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginTop: 28,
    marginLeft: 20
  },
  automaticLocation: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginTop: 2
  },
  toggleDisabled3: {
    width: 45,
    height: 21,
    backgroundColor: "transparent",
    marginLeft: 226
  },
  automaticLocationRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 20,
    marginRight: 20
  }
});

export default CardSecurityLocation1;

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Card7ProtectionPrivacy(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.protectionPrivacy1}>
        <View style={styles.rectangle473}>
          <Text style={styles.protectionAndPriva1}>Protection and Privacy</Text>
          <Text style={styles.helpProtectYourWe1}>
            Help protect your website and its users {"\n"}with clear and fair
            website terms and {"\n"}conditions. These terms and conditions{" "}
            {"\n"}for a website set out key issues such as acceptable use,
            privacy, cookies, registration and passwords, intellectual property,{" "}
            {"\n"}links to other sites, termination and disclaimers of
            responsibility.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  protectionPrivacy1: {
    width: 375,
    height: 278
  },
  rectangle473: {
    width: 375,
    height: 278,
    backgroundColor: "rgba(255,255,255,1)"
  },
  protectionAndPriva1: {
    backgroundColor: "transparent",
    color: "rgba(88,80,79,1)",
    fontSize: 15,
    marginTop: 26,
    marginLeft: 20
  },
  helpProtectYourWe1: {
    width: 335,
    height: 184,
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 16,
    lineHeight: 23,
    marginTop: 24,
    marginLeft: 20
  }
});

export default Card7ProtectionPrivacy;

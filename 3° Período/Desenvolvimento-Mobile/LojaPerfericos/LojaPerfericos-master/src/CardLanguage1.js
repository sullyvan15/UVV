import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function CardLanguage1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.language}>
        <View style={styles.rectangle47Copy3}>
          <Text style={styles.language1}>Linguagem</Text>
          <Text style={styles.englishUnitedKing}>Português (Brasil)</Text>
          <Text style={styles.addLanguage}>+ Adicionar lingua</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  language: {
    width: 377,
    height: 151,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rectangle47Copy3: {
    width: 377,
    height: 151,
    backgroundColor: "rgba(255,255,255,1)"
  },
  language1: {
    backgroundColor: "transparent",
    color: "rgba(88,80,79,1)",
    fontSize: 15,
    marginTop: 30,
    marginLeft: 20
  },
  englishUnitedKing: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginTop: 25,
    marginLeft: 20
  },
  addLanguage: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginTop: 20,
    marginLeft: 20
  }
});

export default CardLanguage1;
